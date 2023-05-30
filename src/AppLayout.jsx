import React, { useState, useEffect } from "react";
import ElementLoader from "./utils/ElementLoader";
import Header from "./utils/Header";
import Footer from "./utils/Footer";

const AppLayout = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <ElementLoader />
      ) : (
        <>
          <Header />
          <main>{children}</main>
          <Footer />
        </>
      )}
    </>
  );
};

export default AppLayout;
