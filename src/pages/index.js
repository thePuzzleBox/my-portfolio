import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Subscribe from '../components/Subscribe';

import reel from '../assets/images/landing1.mp4';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            {config.subHeading}
          </h2>

          <Scroll type="id" element="video">
        <a href="#video" className="more">
        </a>
          </Scroll>
          
        </div>
      </div>
    </header>

    <section id="video" className="video-section align-center">
  <div className="vid-container">
   <video src={reel} autoPlay={true} playsInline={true} loop muted/>
  </div>
</section>

<Subscribe/>
    <Footer />
  </Layout>
);


export default IndexPage;
