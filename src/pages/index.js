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
			winHeight: '100vh',
			darkMode: 'false'
		};
		if (typeof window === 'undefined') {
			global.window = {};
		}
	}

	componentDidMount() {
		let darkMode = localStorage.getItem('darkMode');

		this.setState({
			darkMode: darkMode
		});
        
		this.showTwitter(this.state.darkMode);
	}

	showTwitter(mode) {
		return (
			<a
				class="twitter-timeline"
				data-theme={this.state.darkMode === 'true' ? 'dark' : 'light'}
				href="https://twitter.com/JohanGace?ref_src=twsrc%5Etfw"
			>
				Tweets
			</a>
		);
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
							<a className="arrow ">............</a>
						</div>
					</div>

				
					<div className="social-buttons">
						<SocialLinks />
					</div>
				</div>

				{/* <PortfolioList /> */}
				<div className="blg">
					<BlogList />
					<div className="twitter">
						<div className="content">
							<Helmet>
								<script async src="https://platform.twitter.com/widgets.js" charset="utf-8" />
							</Helmet>
							{this.showTwitter(this.state.darkMode)}
						</div>
					</div>
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
