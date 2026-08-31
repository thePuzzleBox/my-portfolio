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

    this.galleryItems = [];
    this.galleryObserver = null;
    this.galleryTimer = null;
    this.gallerySetupTimeout = null;

    this.lastScrollY = 0;
    this.isScrollingDown = true;
    this.galleryRunning = false;
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ isPreloaded: false });
    }, 100);

    this.gallerySetupTimeout = setTimeout(() => {
      this.setupGallery();
    }, 300);

    this.lastScrollY = window.scrollY;

    window.addEventListener('scroll', this.handleScroll, {
      passive: true,
    });
  }

  setupGallery = () => {
    this.galleryItems = Array.from(
      document.querySelectorAll('.tiles > div')
    );

    if (!this.galleryItems.length) {
      return;
    }

    this.galleryObserver = new IntersectionObserver(
      () => {
        this.processGallery();
      },
      {
        threshold: 0.01,
      }
    );

    this.galleryItems.forEach(item => {
      this.galleryObserver.observe(item);
    });

    /*
     * IMPORTANT:
     * If the page opens somewhere in the middle,
     * everything above the user's viewport is immediately
     * made visible. Nothing below the viewport is touched.
     */
    this.revealEverythingAboveViewport();

    /*
     * Then process the images the user can actually see.
     */
    this.processGallery();
  };

  handleScroll = () => {
    const currentScrollY = window.scrollY;

    this.isScrollingDown =
      currentScrollY > this.lastScrollY;

    this.lastScrollY = currentScrollY;

    /*
     * ALWAYS fill images that are now above the viewport.
     *
     * This happens in both directions so that scrolling
     * back upward can never expose a blank image.
     */
    this.revealEverythingAboveViewport();

    /*
     * Only images in the current viewport animate.
     */
    if (this.isScrollingDown) {
      this.processGallery();
    }
  };

  revealEverythingAboveViewport = () => {
    if (!this.galleryItems.length) {
      return;
    }

    this.galleryItems.forEach(item => {
      if (item.classList.contains('gallery-visible')) {
        return;
      }

      if (item.classList.contains('gallery-instant')) {
        return;
      }

      const rect = item.getBoundingClientRect();

      /*
       * The entire image is above the viewport.
       *
       * It has been passed/skipped, so it becomes visible
       * permanently without animation.
       */
      if (rect.bottom <= 0) {
        item.classList.add('gallery-instant');
      }
    });
  };

  processGallery = () => {
    if (
      this.galleryRunning ||
      !this.galleryItems.length ||
      !this.isScrollingDown
    ) {
      return;
    }

    /*
     * Find ONLY unrevealed images currently visible.
     */
    const visibleImages = this.galleryItems.filter(item => {
      if (
        item.classList.contains('gallery-visible') ||
        item.classList.contains('gallery-instant')
      ) {
        return false;
      }

      const rect = item.getBoundingClientRect();

      return (
        rect.bottom > 0 &&
        rect.top < window.innerHeight &&
        rect.right > 0 &&
        rect.left < window.innerWidth
      );
    });

    if (!visibleImages.length) {
      return;
    }

    /*
     * Sort the images currently on screen:
     *
     * top row → bottom row
     * left → right
     */
    visibleImages.sort((a, b) => {
      const rectA = a.getBoundingClientRect();
      const rectB = b.getBoundingClientRect();

      const rowTolerance = 20;

      if (Math.abs(rectA.top - rectB.top) > rowTolerance) {
        return rectA.top - rectB.top;
      }

      return rectA.left - rectB.left;
    });

    /*
     * Animate only the first currently visible image.
     */
    const image = visibleImages[0];

    image.classList.add('gallery-visible');

    this.galleryRunning = true;

    /*
     * Recheck very quickly for the next visible image.
     *
     * This is NOT a global image queue.
     * The viewport is recalculated every time.
     */
    this.galleryTimer = setTimeout(() => {
      this.galleryTimer = null;
      this.galleryRunning = false;

      /*
       * Fill anything that may have been passed while
       * the previous animation was running.
       */
      this.revealEverythingAboveViewport();

      /*
       * Then find the next image actually on screen.
       */
      this.processGallery();
    }, 100);
  };

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    if (this.gallerySetupTimeout) {
      clearTimeout(this.gallerySetupTimeout);
    }

    if (this.galleryTimer) {
      clearTimeout(this.galleryTimer);
    }

    if (this.galleryObserver) {
      this.galleryObserver.disconnect();
    }

    window.removeEventListener(
      'scroll',
      this.handleScroll
    );
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
                {
                  name: 'description',
                  content: 'Phantom',
                },
                {
                  name: 'keywords',
                  content: 'site, web',
                },
              ]}
            >
              <html lang="en" />
            </Helmet>

            <div
              className={
                isPreloaded
                  ? 'main-body is-preload'
                  : 'main-body'
              }
              style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
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
  hideFooter: PropTypes.bool,
};

export default Layout2;