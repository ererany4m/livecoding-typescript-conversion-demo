
import "./index.css"

import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Start } from "./pages/Start";
import { Details } from "./pages/Details";
import { Create } from "./pages/Create";

const root = createRoot(document.getElementById("app"));
root.render(
    <React.StrictMode>
        <div className="mx-16 my-16">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Start />}
                    />
                    <Route
                        path="/details/:id"
                        element={<Details />}
                    />
                    <Route
                        path="/create"
                        element={<Create />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    </React.StrictMode>
);
