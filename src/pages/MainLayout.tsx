import React, { ReactNode } from "react";
import Header from "../sections/Headers";
import Navbar from "../sections/Navbar";

interface MainLayoutProps {
  children: ReactNode; // ReactNode allows any JSX to be passed as children
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
