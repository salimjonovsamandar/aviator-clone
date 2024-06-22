import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Navbar } from "../sections";

interface mainLayoutProps {}

const MainLayout: React.FC<mainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
