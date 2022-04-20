import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import BlogItems from '../components/items-blog';
import SectionTitle from '../components/sectiontitle';
import SEO from '../components/seo';
import Helmet from 'react-helmet';
import '../style/list-blog.less';

class BlogList extends React.Component {
	componentDidMount() {
		<script async src="https://platform.twitter.com/widgets.js" charset="utf-8" />;
	}
	render() {
		const query = this.props.datas;
		if (query.allMarkdownRemark.edges.length > 0) {
			return (
				<section id="blog" className="container">
					<div className="section-title">
						<SectionTitle title="Blog." />
					</div>
					<BlogItems data={query} />
				</section>
			);
		} else {
			return <React.Fragment />;
		}
	}
}

export default function({ data, pathContext }) {
	return typeof window !== `undefined` ? (
		<Layout>
			<SEO lang="en" title="Blog" />

			<BlogList datas={data} pathContext={pathContext} />
          
		</Layout>
	) : null;
}

export const query = graphql`
	query blogListPage($skip: Int!, $limit: Int!) {
		allMarkdownRemark(
			filter: { fileAbsolutePath: { regex: "/blog/" } }
			sort: { fields: [frontmatter___date], order: DESC }
			limit: $limit
			skip: $skip
		) {
			edges {
				node {
					id
					frontmatter {
						title
						description
						date
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
					fields {
						slug
					}
				}
			}
		}
	}
`;
