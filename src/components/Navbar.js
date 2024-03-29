import React from 'react'
import { Link } from 'gatsby'
 
const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <header 
        id="header" 
        className="alt"
        style={{
          backgroundColor: "#1c2021",
          opacity: "0.75"
        }}
      >
        <div className="navbar-brand">
          <h1 id="logo">
            <Link to="/">
              Manuele Onofri Website
            </Link>
          </h1>
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${this.state.navBarActiveClass}`}
            data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
            <span />
            <span />
            <span />
          </div>
          <nav 
            id="navMenu"
            className={`${this.state.navBarActiveClass}`}
          >
            <ul className="navbar-start has-text-centered">
              <li><Link className="navbar-item" to="/products">Portfolio</Link></li>
              <li><Link className="navbar-item" to="/blog">Blog</Link></li>
              <li><Link className="navbar-item" to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
    </header>
    )
  }
}

export default Navbar
