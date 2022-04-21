import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import SocialLinks from '../components/sociallinks';
import BlogList from '../components/list-blog';
import '../style/wall.less';
import Helmet from 'react-helmet';

var ReactRotatingText = require('react-rotating-text');

class IndexPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			winHeight: '100vh'
		};
		// this.width = window.innerWidth;
		if (typeof window === 'undefined') {
			global.window = {};
		}
		// const module = typeof window !== `undefined` ? require("module") : null;
	}

	createSVGElement(n, v) {
		n = document.createElementNS('http://www.w3.org/2000/svg', n);
		for (var p in v) n.setAttributeNS(null, p, v[p]);
		return n;
	}

	setWindowHeight() {
		this.setState({
			winHeight: window.innerHeight
		});
	}
	render() {
		return typeof window !== `undefined` ? (
			<Layout placeholder={false}>
				<SEO lang="en" title={this.props.data.site.siteMetadata.title} />
                
				<div className="wall" style={{ height: this.state.winHeight + 'px' }}>
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
								<span className="red bkg-blk"> JOHAN</span> GACE.
								{/* {this.props.data.site.siteMetadata.title.toUpperCase()} */}
							</p>
						</div>
						{/* <span>.</span> */}

						<h1 className="caption text-secondary ">
							<ReactRotatingText
								typingInterval={120}
								color
								deletingInterval={80}
								pauseInterval={8000}
								// eraseMode={"overwrite"}
								items={[
									'I am a UX Engineer.',
									'I craft Digital Experiences.',
									'I Design & Build things.'
								]}
							/>
						</h1>
						<div className="container">
							{/* <hr className="v-line" /> */}
							<a className="arrow ">............</a>
						</div>
					</div>

					{/* <a href="#portfolio" className="arrow">
                        more...
                    </a> */}
					<div className="social-buttons">
						<SocialLinks />
					</div>
				</div>

				{/* <PortfolioList /> */}
				<div className="">
					<BlogList />
					<section id="blog" className="container">
						<div className="box">
							<div className="content">
								<Helmet>
									<script async src="https://platform.twitter.com/widgets.js" charset="utf-8" />
								</Helmet>
							{this.props.data.site.siteMetadata.darkmode ? (
								<a class="twitter-timeline" href="https://twitter.com/JohanGace?ref_src=twsrc%5Etfw">
									Tweets 
								</a>
							) : (
								<a
									class="twitter-timeline"
									// data-theme="dark"
									href="https://twitter.com/JohanGace?ref_src=twsrc%5Etfw"
								>
									Tweets 
								</a>
							)}
												</div>

						</div>
					</section>
				</div>

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
                darkmode
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
