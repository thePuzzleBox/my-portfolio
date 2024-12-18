import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/main.scss';
import Footer from './Footer';
import Header from '../components/Header';

class Layout2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPreloaded: true,
    };
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ isPreloaded: false });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    const { children, hideFooter } = this.props;
    const { isPreloaded } = this.state;

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Header />
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Phantom' },
                { name: 'keywords', content: 'site, web' },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <div className={isPreloaded ? 'main-body is-preload' : 'main-body'} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
              <div id="wrapper" style={{ flex: '1' }}>
                {children}
              </div>
            </div>
            {!hideFooter && <Footer />}
          </>
        )}
      />
    );
  }
}

Layout2.propTypes = {
  children: PropTypes.node.isRequired,
  hideFooter: PropTypes.bool, // control footer visibility
};

export default Layout2;