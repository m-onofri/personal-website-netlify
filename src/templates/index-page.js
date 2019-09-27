import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
 
import Layout from '../components/Layout'
import PortfolioFeatures from '../components/PortfolioFeatures'
import BlogRollFeatures from '../components/BlogRollFeatures'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
	<section 
		id="banner"
		style={{
			backgroundImage: `url(${
			  !!image.childImageSharp ? image.childImageSharp.fluid.src : image
			})`,
			backgroundPosition: `top center`,
			backgroundAttachment: `fixed`,
			backgroundSize: 'cover'
		}}
	>
		<div className="inner">

			<header>
				<h2>{mainpitch.title}</h2>
			</header>
			<p>{mainpitch.description}</p>
		</div>
	</section>

		
	<article id="main">
	
		<section className="wrapper style3 container special">

			<header className="major">
				<h2><strong>MY PROJECTS</strong></h2>
			</header>

			<PortfolioFeatures gridItems={intro.blurbs} />

			<footer className="major">
				<ul className="buttons">
					<li><Link to="#" className="button">See More</Link></li>
				</ul>
			</footer>

		</section>

		<section className="wrapper style1 container special">
			<header className="major">
				<h2>MY BLOG</h2>
			</header>
			<BlogRollFeatures />
			<footer className="major">
				<ul className="buttons">
					<li><Link to="./blog" className="button">See More</Link></li>
				</ul>
			</footer>
		</section>

	</article>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
