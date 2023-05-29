import React from "react";
import Header from "./utils/Header";
import Footer from "./utils/Footer";

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default AppLayout;
