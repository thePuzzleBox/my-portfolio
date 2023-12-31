import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/Header';

import portrait from '../assets/images/me.jpg';

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
          
          <Scroll type="id" element="about">
            <a href="#about" className="btn btn-primary">
              Enter
            </a>
          </Scroll> 
          
        </div>
      </div>
    </header>

    <section id="about" className="about-section text-left">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 mx-auto mb-5">
        <img src={portrait} className="img-fluid" alt="" />
      </div>
      <div className="col-lg-6 mx-auto">
        <h2 className="text-white mb-4">About</h2>
        <p className="text-white-50">
          Community college graduate studying political science and film at Yale. With an extensive background in advocacy, Jalen seeks to do meaningful work in visual storytelling and ecotourism. Whether it be through documentary, wildlife filmmaking, or outdoor videography, he hopes to travel, capture the natural world, and explore the intersection between entertainment and the environment.
          <br /><br />Outside of being an adventurer, Jalen is also an avid skateboarder, writer, frequent moviegoer, and die-hard comic book fan who can tell you one too many Marvel movie easter-eggs.
        </p>
      </div>
    </div>
  </div>
</section>

    <Footer />
  </Layout>
);


export default IndexPage;
