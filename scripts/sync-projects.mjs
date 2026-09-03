/**
 * Syncs lib/project-data.ts into the prebuilt bundle's projects array.
 *
 * The site is a prebuilt Vite/React bundle loaded via a <script> tag, so it
 * cannot import from the Next.js app. This script is the bridge: it reads the
 * data file, validates it, and rewrites the `Yo=[...]` array inside the bundle.
 *
 * Runs automatically via the `prebuild` npm hook. Safe to re-run (idempotent).
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DATA = path.join(ROOT, 'lib/project-data.ts');
const BUNDLE = path.join(ROOT, 'public/assets/index-BV5kaT2M.js');
const PAGE = path.join(ROOT, 'app/page.jsx');
const ASSET_DIR = path.join(ROOT, 'public/assets');

const fail = (msg) => {
  console.error(`\n  sync-projects failed: ${msg}\n`);
  process.exit(1);
};

/* --- 1. read the data file ------------------------------------------------
   The file is plain TypeScript data with no export, so it is parsed by
   slicing the array literal rather than imported. */
const src = fs.readFileSync(DATA, 'utf8');
const open = src.indexOf('[');
const close = src.lastIndexOf(']');
if (open === -1 || close === -1) fail('no array literal found in lib/project-data.ts');

let projects;
try {
  projects = Function(`"use strict";return (${src.slice(open, close + 1)});`)();
} catch (err) {
  fail(`could not parse lib/project-data.ts — ${err.message}`);
}

/* --- 2. validate ---------------------------------------------------------- */
if (!Array.isArray(projects) || projects.length === 0) fail('project data is not a non-empty array');

const onDisk = new Set(fs.readdirSync(ASSET_DIR));
const seenIds = new Set();
const problems = [];

for (const [i, p] of projects.entries()) {
  const where = `entry ${i + 1} (${p.title ?? 'untitled'})`;

  for (const field of ['id', 'title', 'description', 'tags', 'demo', 'images']) {
    if (p[field] === undefined) problems.push(`${where}: missing "${field}"`);
  }
  if (seenIds.has(p.id)) problems.push(`${where}: duplicate id ${p.id} — ids are React keys`);
  seenIds.add(p.id);

  // The card reads images[0] unguarded when there is no video, so an entry
  // with neither would crash the whole projects section at runtime.
  if (!p.video && !(p.images && p.images.length)) {
    problems.push(`${where}: needs a "video" or a non-empty "images" array`);
  }
  if (p.tags && new Set(p.tags).size !== p.tags.length) {
    problems.push(`${where}: duplicate tag — tags are React keys`);
  }
  if (p.videos && p.posters && p.videos.length !== p.posters.length) {
    problems.push(`${where}: ${p.videos.length} videos but ${p.posters.length} posters`);
  }

  // Compared against a real directory listing, not fs.existsSync: macOS is
  // case-insensitive but the deploy target is Linux, so a case mismatch would
  // pass locally and 404 in production.
  const refs = [...(p.images ?? []), ...(p.videos ?? []), ...(p.posters ?? []), p.video, p.poster];
  for (const ref of refs.filter(Boolean)) {
    if (!ref.startsWith('/assets/')) problems.push(`${where}: "${ref}" must start with /assets/`);
    else if (!onDisk.has(ref.slice('/assets/'.length))) problems.push(`${where}: missing asset "${ref}"`);
  }
}
if (problems.length) fail(`\n    - ${problems.join('\n    - ')}`);

/* --- 3. patch the bundle -------------------------------------------------- */
let bundle = fs.readFileSync(BUNDLE, 'utf8');
const start = bundle.indexOf('Yo=[');
const end = bundle.indexOf('],ak=');
if (start === -1 || end === -1 || end < start) fail('projects array markers not found in bundle');

bundle = bundle.slice(0, start) + 'Yo=' + JSON.stringify(projects) + bundle.slice(end + 1);
fs.writeFileSync(BUNDLE, bundle);

/* --- 4. bust the cache ----------------------------------------------------
   The bundle filename never changes, so returning visitors would otherwise be
   served the previous contents from cache. */
const hash = crypto.createHash('sha1').update(bundle).digest('hex').slice(0, 8);
const page = fs.readFileSync(PAGE, 'utf8');
const bumped = page.replace(/(\?v=)[^'"]*/, `$1${hash}`);
if (bumped === page && !page.includes(`?v=${hash}`)) fail('could not find the ?v= cache-buster in app/page.jsx');
fs.writeFileSync(PAGE, bumped);

console.log(`  synced ${projects.length} projects into the bundle (cache key ${hash})`);
for (const p of projects) console.log(`    ${p.id}. ${p.title}`);
