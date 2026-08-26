import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Footnote from '../components/Footnote';

import reel from '../assets/images/landing.mp4';

const IndexPage = () => (
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

    <Footnote />
    <Footer />
  </Layout>
);

export default IndexPage;