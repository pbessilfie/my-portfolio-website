'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    if (window.__lamineCloneLoaded) return;

    window.__lamineCloneLoaded = true;

    const script = document.createElement('script');
    script.type = 'module';
    script.src = '/assets/index-BV5kaT2M.js?v=b593d72e';
    script.crossOrigin = '';
    script.onerror = () => {
      window.__lamineCloneLoaded = false;
    };

    document.body.appendChild(script);
  }, []);

  return <div id="root" suppressHydrationWarning />;
}
