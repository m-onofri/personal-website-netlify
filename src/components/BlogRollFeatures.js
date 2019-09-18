import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import { FaCheck } from 'react-icons/fa';

class BlogRoll1 extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
        <div className="row">	
            {posts && posts.map(({ node: post }) => (
                <div className="col-4 col-12-narrower" key={post.id}>
                    <section>
						<span className="icon solid featured">
							<FaCheck />
						</span>
						<header>
                            <Link to={post.fields.slug}>
                                <h3>{post.frontmatter.title}</h3>
                            </Link>
							<p>{post.frontmatter.date}</p>
						</header>
						<p>{post.excerpt} <Link to={post.fields.slug}>Keep reading...</Link>
						</p>
					</section>
                </div>
            ))}
		</div>  
    )
  }
}

BlogRoll1.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery1 {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll1 data={data} count={count} />}
  />
)
