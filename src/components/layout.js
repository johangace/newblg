import React from "react";
import Head from "./head";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ placeholder, children }) => {
    const isBrowser = typeof window !== `undefined`;
    // if (isBrowser) {
    //     console.log("this" + window.location.pathname);
    // }
    return (
        <React.Fragment>
            <Head />
            <Navbar
                placeholder={placeholder === undefined ? true : placeholder}
            />
            <div className="wrapper">{children}</div>
            <Footer />
        </React.Fragment>
    );
};

export default Layout;
