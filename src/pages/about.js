import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';

import portrait from '../assets/images/me.jpg';

const AboutPage = () => (
  <Layout>
    <Header />
	<section id="about" className="about-section text-left">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 mx-auto mb-5">
        <img src={portrait} className="img-fluid" alt="" />
      </div>
      <div className="col-lg-8 mx-auto">
        <h2 className="fg text-black mb-4 text-center">About</h2>
        <p className="fg text-black">
          Jalen Smith is a travel film creative and nomadic storyteller. Hailing from southern California, he is currently completeing an interdisciplinary major of political science and film at Yale. After transferring from community college in 2022 with 
          an extensive background in advocacy, Jalen seeks to do meaningful work in visual storytelling and ecotourism. Through documentary and adventure filmmaking, he hopes to travel, capture the natural world, and inspire others to not just see it,
           but to feel and live through all of the experiences it has to offer. His one piece of advice? "Go."
          
          <br/><br/>He is currently writing his senior thesis on the South African energy crisis and corruption of its major utility company, Eskom, under the supervision of South African author
          and Yale and Oxford Law Professor Jonny Steinberg.

          <br /><br />Outside of being an adventurer, Jalen is an avid skateboarder, writer, and undercover pianist. He takes pride in being a jack-of-all-trades and believes his greatest skill is his eagerness to learn something new.
          <br /><br /><br/><br/>Photo by Cullen Welch
        </p>
      </div>
    </div>
  </div>
</section>

    <Footer />
  </Layout>
);

export default AboutPage;