/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/Root";
import ErrorPage from "./components/Error-page";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllProdcucts from "./components/AllProducts";
import CategoryProducts from "./components/CategoryProducts";

// react query
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <AllProdcucts /> },
      {
        path: "/products",
        element: <AllProdcucts />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/products/categories/:categoryName",
        element: <CategoryProducts />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  </React.StrictMode>
);
