import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import SocialLinks from "../components/sociallinks";
import PortfolioList from "../components/list-portfolio";
import BlogList from "../components/list-blog";
import Contact from "../components/contact";
import "../style/wall.less";
import Typing from "react-typing-animation";
// import ReactTypingEffect from "react-typing-effect";

class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            winHeight: "100vh"
        };
        // this.width = window.innerWidth;
        if (typeof window === "undefined") {
            global.window = {};
        }
        // const module = typeof window !== `undefined` ? require("module") : null;
    }

    createSVGElement(n, v) {
        n = document.createElementNS("http://www.w3.org/2000/svg", n);
        for (var p in v) n.setAttributeNS(null, p, v[p]);
        return n;
    }

    // componentDidMount() {
    //     const isBrowser = typeof window !== "undefined";
    //     const AOS = isBrowser ? require("aos") : undefined;

    //     this.aos = AOS;
    //     this.aos.init();
    // }

    // componentDidUpdate() {
    //     this.aos.refresh();
    // }
    // componentDidMount() {
    //     // Wrap the require in check for window
    //     // if (typeof window !== `undefined`) {
    //     //     const module = require("module");
    //     // }
    //     this.setWindowHeight();
    //     let _this = this;
    //     window.addEventListener("resize", function() {
    //         _this.setWindowHeight();
    //     });
    //     let sWidth = this.svg.clientWidth,
    //         tText = this.svg.querySelector("text"),
    //         tWidth = tText.getBoundingClientRect().width;
    //     if (tWidth > sWidth) {
    //         let tInnerText = tText.innerHTML;
    //         if (tInnerText.split(" ").length > 1) {
    //             tText.innerHTML = "";
    //             tInnerText.split(" ").forEach(function(e, i) {
    //                 let tSpan = _this.createSVGElement("tspan", {
    //                     dy: i === 0 ? "0em" : ".8em",
    //                     x: "50"
    //                 });
    //                 tSpan.innerHTML = e;
    //                 tText.appendChild(tSpan);
    //             });
    //             setTimeout(function() {
    //                 _this.svg.style.height =
    //                     tText.getBoundingClientRect().height + 70;
    //                 _this.svg.style.margin = "15px auto";
    //             }, 250);
    //         } else {
    //             while (tWidth > sWidth) {
    //                 let fontSize = parseInt(
    //                     window
    //                         .getComputedStyle(tText, null)
    //                         .getPropertyValue("font-size")
    //                 );
    //                 tText.style.fontSize = fontSize - 1 + "px";
    //                 tWidth = tText.getBoundingClientRect().width;
    //             }
    //         }
    //     }
    // }
    setWindowHeight() {
        this.setState({
            winHeight: window.innerHeight
        });
    }
    render() {
        return typeof window !== `undefined` ? (
            <Layout placeholder={false}>
                <SEO
                    lang="en"
                    title={this.props.data.site.siteMetadata.title}
                />
                <div
                    className="wall"
                    style={{ height: this.state.winHeight + "px" }}
                >
                    <div className="intro container">
                        <div className="tag-line text-secondary">
                            {/* <svg
                                width="10%"
                                height="205px"
                                viewBox="30 30 30 30"
                                preserveAspectRatio="xMidYMid slice"
                                ref={c => (this.svg = c)}
                            >
                                {this.props.data.site.siteMetadata
                                    .capitalizeTitleOnHome
                                    ? this.props.data.site.siteMetadata.title.toUpperCase()
                                    : this.props.data.site.siteMetadata.title}
                                <pattern
                                    id="wallPattern"
                                    patternUnits="userSpaceOnUse"
                                    width="100"
                                    height="100"
                                >
                                    <rect
                                        x="0"
                                        y="0"
                                        className="fill-primary"
                                        width="100"
                                        height="100"
                                    />
                                    <image
                                        xlinkHref="/images/wall.jpg"
                                        height="100"
                                        width="100"
                                        y="0"
                                        preserveAspectRatio="none"
                                    ></image>
                                </pattern>

                                <text
                                    fill="url(#wallPattern)"
                                    textAnchor="middle"
                                    x="50"
                                    y="50"
                                >
                                    {" "}
                                    {this.props.data.site.siteMetadata
                                        .capitalizeTitleOnHome
                                        ? this.props.data.site.siteMetadata.title.toUpperCase()
                                        : this.props.data.site.siteMetadata
                                              .title}
                                </text>
                            </svg> */}
                            <p className="tag-line text-secondary">
                                <span className="red bkg-blk"> JOHAN</span>{" "}
                                GACE.
                                {/* {this.props.data.site.siteMetadata.title.toUpperCase()} */}
                            </p>
                        </div>
                        {/* <span>.</span> */}

                        <h1 className="caption text-secondary ">
                            {" "}
                            {/* <ReactTypingEffect
                                speed={100}
                                cursorClassName="red"
                                className=" fonty"
                                // staticText={this.props.children}
                                text={
                                    [
                                        "I craft Digital Experiences.",
                                        "I Love to Design & Build things."
                                    ]

                                    // this.props.data.site.siteMetadata
                                    //     .description
                                }
                            /> */}
                            <Typing loop={false} speed={90}>
                                <div className="fonty" sp>
                                    I am a web developer.
                                </div>
                                <Typing.Backspace count={21} delay={100} />
                                <div className="fonty">
                                    I craft Digital Experiences.
                                </div>
                                <Typing.Backspace count={28} delay={100} />
                                {/* <Typing.Delay ms={1000} /> */}
                                <div className="fonty">
                                    I Love to Design & Build things.
                                    {/* <Typing.Reset count={1} delay={500} /> */}
                                </div>
                                {/* <Typing.Reset count={1} delay={500} /> */}
                                {/* <Cursor /> */}
                            </Typing>
                        </h1>
                        <div className="container">
                            <a href="#blog" className="arrow ">
                                <hr className="v-line" />
                                more...
                            </a>
                        </div>
                    </div>

                    {/* <a href="#portfolio" className="arrow">
                        more...
                    </a> */}
                    <div className="social-buttons">
                        <SocialLinks />
                    </div>
                </div>

                <PortfolioList />
                <BlogList />

                {/* <Contact /> */}
            </Layout>
        ) : null;
    }
}

export default IndexPage;

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
                capitalizeTitleOnHome
                titleImage
                introTag
                description
                social {
                    name
                    url
                    icon
                }
            }
        }
    }
`;
