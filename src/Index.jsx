/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/Root";
import ErrorPage from "./components/Error-page";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllProdcucts from "./components/AllProducts";
import CategoryProducts from "./components/CategoryProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <AllProdcucts /> },
      { path: "/products", element: <AllProdcucts /> },
      {
        path: "/products/categories/:categoryName",
        element: <CategoryProducts />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
