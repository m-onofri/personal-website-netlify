import React from 'react'

import {FaTwitter} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {FaGooglePlusG} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaDribbble} from 'react-icons/fa'

const Footer = class extends React.Component {
  render() {
    return (
      <footer id="footer">

      <ul className="icons">
        <li><a href="#" className="icon brands circle fa-twitter"><FaTwitter /></a></li>
        <li><a href="#" className="icon brands circle fa-facebook-f"><FaFacebookF /></a></li>
        <li><a href="#" className="icon brands circle fa-google-plus-g"><FaGooglePlusG /></a></li>
        <li><a href="#" className="icon brands circle fa-github"><FaGithub /></a></li>
        <li><a href="#" className="icon brands circle fa-dribbble"><FaDribbble /></a></li>
      </ul>

      <ul className="copyright">
        <li>&copy; Untitled</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
      </ul>

    </footer>
    )
  }
}

export default Footer
