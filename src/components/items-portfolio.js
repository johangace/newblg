import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import '../style/list-portfolio.less';

class PortfolioItem extends React.Component {
	render() {
		return (
			<div className="col m6">
				<div className="row flex">
					<div className="col m6 l12 image orange ">
						<Link
							to={this.props.data.node.fields.slug}
							title={this.props.data.node.frontmatter.title}
							aria-label={this.props.data.node.frontmatter.title}
						>
							<Img
								fluid={this.props.data.node.frontmatter.image.childImageSharp.fluid}
								style={{ minWidth: 350, width: 'auto', height: 400, boxShadow:' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}
							/>

							<div style={{ margin: '25px 0px' }}>
								<h6 className="text-secondary orange">{this.props.data.node.frontmatter.title}</h6>
								<p className="text-tertiary">{this.props.data.node.frontmatter.description}</p>
								<p className="text-tag">{this.props.data.node.frontmatter.tags}</p>
							</div>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default function(props) {
	const data = props.data.allMarkdownRemark.edges;
	let items = [];
	data.forEach(function(e, i) {
		items.push(<PortfolioItem key={e.node.id} data={e} />);
	});
	return <div className="row">{items}</div>;
}
