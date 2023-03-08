import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import HomeRoute from "./routes/HomeRoute";
import ProjectRoute from "./routes/ProjectRoute";
import ContactRoute from "./routes/ContactRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomeRoute />} />
          <Route path="/project" element={<ProjectRoute />} />
          <Route path="/Contact" element={<ContactRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
