import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import "./index.scss";
import App from "./aviator";
import Home from "./pages/home";
import SetNumber from "./components/admin/setNumber";
import SetUsers from "../src/components/admin/setUsers";
import SetName from "../src/components/admin/setName";

import { Provider } from "./context";
import { SnackbarProvider } from "notistack";

import ReportComplete from "./components/ReportComplete";
import AdminHeader from "./components/admin/header";
import MainLayout from "./pages/MainLayout";
import Aviator from "./aviator";
import Header from "./components/header";
import { Navbar } from "./sections";

createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <SnackbarProvider
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            Components={{
              reportComplete: ReportComplete,
            }}
            maxSnack={3}
            autoHideDuration={3000}
          >
            <Provider>
              <MainLayout>
                <Home />
              </MainLayout>
              <ToastContainer position="top-center" theme="dark" />
            </Provider>
          </SnackbarProvider>
        }
      />
      <Route
        path="/aviator"
        element={
          <SnackbarProvider
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            Components={{
              reportComplete: ReportComplete,
            }}
            maxSnack={3}
            autoHideDuration={3000}
          >
            <Provider>
              <App />
              <ToastContainer position="top-center" theme="dark" />
            </Provider>
          </SnackbarProvider>
        }
      />

      <Route
        path="/set_numbers"
        element={
          <Provider>
            <AdminHeader />
            <SetNumber />
            <ToastContainer position="top-center" theme="dark" />
          </Provider>
        }
      />
      <Route
        path="/set_name"
        element={
          <Provider>
            <AdminHeader />
            <SetName />
            <ToastContainer position="top-center" theme="dark" />
          </Provider>
        }
      />
      <Route
        path="/set_users"
        element={
          <Provider>
            <AdminHeader />
            <SetUsers />
            <ToastContainer position="top-center" theme="dark" />
          </Provider>
        }
      />
    </Routes>
  </BrowserRouter>
);
