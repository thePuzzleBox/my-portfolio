import React, { Component } from 'react';
import Scroll from './Scroll';

import img from '../assets/img/red.png';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openMenu: false,
      visibilityClass: '',
    };

    this.lastScrollY = 0;
  }

  toggleMenu = value => {
    this.setState({ openMenu: value });

    // Prevent the page from scrolling while the mobile menu is open
    document.body.style.overflow = value ? 'hidden' : '';
  };

  handleScroll = () => {
    const currentScrollY = window.pageYOffset;

    // Always show navbar at the very top
    if (currentScrollY <= 0) {
      this.setState({
        visibilityClass: '',
      });

      this.lastScrollY = currentScrollY;
      return;
    }

    // Scrolling down
    if (currentScrollY > this.lastScrollY) {
      this.setState({
        visibilityClass: 'navbar-shrink',
      });
    }

    // Scrolling up
    if (currentScrollY < this.lastScrollY) {
      this.setState({
        visibilityClass: 'navbar-hidden',
      });
    }

    this.lastScrollY = currentScrollY;
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);

    // Restore scrolling if the component is removed while menu is open
    document.body.style.overflow = '';
  }

  render() {
    const { openMenu, visibilityClass } = this.state;

    return (
      <Layout>
        <nav
          className={`navbar navbar-expand-lg navbar-light fixed-top ${
            visibilityClass
          } ${openMenu ? 'mobile-menu-open' : ''}`}
          id="mainNav"
        >
          <div className="container">

            <a className="navbar-brand" href="#page-top">
              <Link to="/">
                <img src={img} alt="air nomad" width="40" />
              </Link>
            </a>

            <button
              onClick={_ => this.toggleMenu(!openMenu)}
              className={`navbar-toggler navbar-toggler-right ${
                openMenu ? '' : 'collapsed'
              }`}
              type="button"
              aria-controls="navbarResponsive"
              aria-expanded={openMenu}
              aria-label="Toggle navigation"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>

            <div
              className={`collapse navbar-collapse ${
                openMenu ? 'show' : ''
              }`}
              id="navbarResponsive"
            >
              <ul className="navbar-nav ml-auto">

                <li className="nav-item">
                  <Scroll
                    onClick={_ => this.toggleMenu(!openMenu)}
                    type="id"
                    element="my work"
                  >
                    <a className="nav-link" href="#portfolio">
                      <Link to="/portfolio">My Work</Link>
                    </a>
                  </Scroll>
                </li>

                <li className="nav-item">
                  <Scroll
                    onClick={_ => this.toggleMenu(!openMenu)}
                    type="id"
                    element="about"
                  >
                    <a className="nav-link" href="about">
                      <Link to="/about">About</Link>
                    </a>
                  </Scroll>
                </li>

                {/*<li className="nav-item">
                  <Scroll
                    onClick={_ => this.toggleMenu(!openMenu)}
                    type="id"
                    element="contact"
                  >
                    <a className="nav-link" href="#contact">
                      <Link to="/">Contact</Link>
                    </a>
                  </Scroll>
                </li> */}

              </ul>
            </div>
          </div>
        </nav>
      </Layout>
    );
  }
}