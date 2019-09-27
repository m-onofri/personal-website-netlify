import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        {/* <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section> */}
        
        <article id="main">
        <header class="special container">
						<span class="icon solid fa-mobile-alt"></span>
						<h2><strong>BLOG POSTS</strong></h2>
					</header>
					<section class="wrapper style4 container">
            <div class="content">
              <BlogRoll />
            </div>
					</section>
				</article>
      </Layout>
    )
  }
}
