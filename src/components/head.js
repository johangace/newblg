import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function Header() {
    const query = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    darkmode
                    icon
                }
            }
        }
    `);
    return (
        <Helmet>
            <link
                rel="icon"
                href={query.site.siteMetadata.icon}
                type="image/png"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdn.jsdelivr.net/gh/akzhy/trunk/dist/trunk.min.css"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;500;600;800;900&display=swap"
                rel="stylesheet"
            ></link>
            <link
                href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;600;700;900&display=swap"
                rel="stylesheet"
            ></link>
       <title>Johan Gace</title>
        </Helmet>
    );
}

export default Header;
