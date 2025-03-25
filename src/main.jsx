import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./Components/About.jsx";
import Resume from "./Components/Resume.jsx";
import Works from "./Components/Works.jsx";
import Contact from "./Components/Contact.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<About />} />
          <Route path="resume" element={<Resume />} />
          <Route path="works" element={<Works />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
