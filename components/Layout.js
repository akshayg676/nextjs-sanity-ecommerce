import Head from "next/head";
import React from "react";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      {/* Irresistibly tempting!! */}
      <Head>
        <title>Choc-O-Holics</title>
        <meta name="description" content="Choc-O-Holics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
