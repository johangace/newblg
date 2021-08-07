import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import "../style/list-portfolio.less";

class PortfolioItem extends React.Component {
    render() {
        return (
            <div className="col m6" >
                <div className="row flex">
                    <div className="col m6 image orange " >
                    <Link
                                to={this.props.data.node.fields.slug}
                                title={this.props.data.node.frontmatter.title}
                                aria-label={
                                    this.props.data.node.frontmatter.title
                                }
                            >
                        <Img
                            fluid={
                                this.props.data.node.frontmatter.image
                                    .childImageSharp.fluid
                            }
                            style={{width:'auto', height:'400px'}}
                            
                        />
                       <h6 className="text-secondary orange">
                                {this.props.data.node.frontmatter.title}
                        </h6>
                        <p className="text-tertiary">
                            {this.props.data.node.frontmatter.description}
                        </p>
                        <p className="text-tag">
                            {this.props.data.node.frontmatter.tags}
                        </p>
                        </Link>
                    </div>
                    </div>
            </div>
        );
    }
}

export default function (props) {
    const data = props.data.allMarkdownRemark.edges;
    let items = [];
    data.forEach(function (e, i) {
        items.push(<PortfolioItem key={e.node.id} data={e} />);
    });
    return <div className="row">{items}</div>;
}
