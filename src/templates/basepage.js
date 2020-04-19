import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Img from "gatsby-image";
import SEO from "../components/seo";
import "../style/basepage.less";

export default function({ data }) {
    return (
        <Layout>
            <SEO
                lang="en"
                title={data.markdownRemark.frontmatter.title}
                description={data.markdownRemark.frontmatter.description}
            />
            <div className="container">
                <article className="post ">
                    <div className="head text-primary">
                        {/* <h1>{data.markdownRemark.frontmatter.title}</h1> */}
                    </div>
                    {/* <div className="content row flex"> */}
                    <div className="content ">
                        <div className="header">
                            <h1 className="say-hi"> Say Hi. </h1>
                            <p> I would love to learn about your projects.</p>

                            <a href="mailto:hello@johangace.com?">
                                <h4> hello@johangace.com</h4>
                            </a>
                            <a href="mailto:hello@johangace.com?">
                                <img
                                    className="envelope"
                                    src="images/mail.svg"
                                />
                            </a>

                            <div
                                className="col s12 m11 l10 about"
                                dangerouslySetInnerHTML={{
                                    __html: data.markdownRemark.html
                                }}
                            ></div>
                        </div>

                        {data.markdownRemark.frontmatter.image && (
                            <div className="right">
                                <div className="img">
                                    <Img
                                        fluid={
                                            data.markdownRemark.frontmatter
                                                .image.childImageSharp.fluid
                                        }
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </article>
            </div>
        </Layout>
    );
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
