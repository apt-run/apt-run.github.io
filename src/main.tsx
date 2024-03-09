import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./routes/Home.tsx";
import { Header } from "./components/Header.tsx";
import Package from "./routes/Package.tsx";
import Search from "./routes/Search.tsx";
import Footer from "./components/Footer.tsx";

const Layout = () => (
  <section className="layout">
    <Header />
    <Outlet />
    <Footer />
  </section>
);

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/package",
        element: <Package />,
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
