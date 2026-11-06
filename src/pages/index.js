import React, { useEffect, useRef, useState } from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Footnote from '../components/Footnote';

import reel from '../assets/images/landing.mp4';
import color from '../assets/images/color.jpg';

import '../assets/sass/_featured.scss';

const IndexPage = () => {
  const featuredRef = useRef(null);
  const [featuredVisible, setFeaturedVisible] = useState(false);

  useEffect(() => {
    const section = featuredRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFeaturedVisible(true);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <Header />

      <header className="masthead">
        <video
          className="masthead-video"
          src={reel}
          autoPlay
          playsInline
          loop
          muted
        />

        <div className="masthead-content">
          <div className="container d-flex h-100 align-items-center">
            <div className="mx-auto text-center">

              <div className="masthead-title">
                <h1 className="mx-auto my-0 text-uppercase">
                  {config.heading}
                </h1>

                <h2 className="text-white-50 mx-auto mt-2 mb-5">
                  {config.subHeading}
                </h2>
              </div>

              <Scroll type="id" element="video">
                <a href="#video" className="more"></a>
              </Scroll>

            </div>
          </div>
        </div>
      </header>

      <section id="video" className="original-landing-image"></section>

      <section
        ref={featuredRef}
        className={`featured py-5 ${featuredVisible ? 'is-visible' : ''}`}
      >
        <div className="container-fluid px-0">
          <div className="row no-gutters align-items-center">

            <div className="col-lg-6 featured-image-column">
              <div className="featured-image-wrapper">
                <a
                  href="https://alumni.yale.edu/news/peru-close-week-yale-alumni-service-corps"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={color}
                    alt="Living in Color film poster"
                    className="img-fluid featured-image"
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-6 featured-text-column">
              <div className="featured-text-wrapper">
                <div className="featured-text">
                  <h4>
                    <a
                      href="https://alumni.yale.edu/news/peru-close-week-yale-alumni-service-corps"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>Living in Color (2026)</i>
                    </a>
                  </h4>
                  <br/>
                  <h5>Documentary Short</h5>
                  <br/>
                  <p>
                    Set against the backdrop of a school painting project, the film follows two volunteers in Peru who they gain a new understanding of themselves and how they fit into the world around them.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footnote />
      <Footer />
    </Layout>
  );
};

export default IndexPage;