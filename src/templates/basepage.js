import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Img from "gatsby-image";
import SEO from "../components/seo";
import "../style/basepage.less";

export default function ({ data }) {
    return typeof window !== `undefined` ? (
        <Layout>
            <SEO
                lang="en"
                title={data.markdownRemark.frontmatter.title}
                description={data.markdownRemark.frontmatter.description}
            />
            <div className="container">
                <div className="post ">
                    <div className="head text-primary">
                        {/* <h1>{data.markdownRemark.frontmatter.title}</h1> */}
                    </div>
                    {/* <div className="content row flex"> */}
                    <div className="content ">
                        <div className="right">
                            <img alt="Johan" src="/images/main-1.jpeg" />
                        </div>
                        <div className="header text-secondary">
                            <h1 className="say-hi"> Say Hi. </h1>
                            <p
                                style={{ fontSize: 18}}
                            >
                                I would love to learn about your projects.
                            </p>

                            <a href="mailto:hello@digistudio.io?">
                                <h4> hello@digistudio.io</h4>
                            </a>
                            <a href="mailto:hello@johangace.com?">
                                <img
                                    alt="email"
                                    className="envelope"
                                    src="/images/mail.png"
                                />
                            </a>

                            <div className="about" >
                                  {"  "}In my work I am driven by curiosity and the love
                                of craft. I enjoy combining different technologies to
                               design & build purposeful human-centered applications. I
                                use design thinking, rapid prototyping and agile
                                development methodologies to create delightful
                                digital experiences. Let's get in touch!
                                <div>Johan Gace,</div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    ) : null;
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                description
                image {
                    publicURL
                    childImageSharp {
                        fluid(maxWidth: 1920) {
                            srcSet
                            ...GatsbyImageSharpFluid
                        }
                        id
                    }
                }
            }
        }
    }
`;
