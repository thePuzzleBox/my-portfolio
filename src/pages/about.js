import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
          Jalen Smith is a travel film creative and nomadic storyteller from Los Angeles, CA. He graduated with an interdisciplinary major of political science and film from Yale College. Upon transferring from community college with 
          an extensive background in advocacy, Jalen sought to do meaningful work in visual storytelling and ecotourism. Through documentary and adventure filmmaking, he aims to travel, capture the natural world, and inspire others to not just see it,
          but to discover for themselves what it means to be a part of it. His word of advice? "Go."
          
          <br/><br/>He dedicated his senior thesis to the ongoing energy crisis in South Africa, detailing the corruption and downfall of its major utility company, Eskom, under the supervision of South African author and Yale and Oxford Law Professor Jonny Steinberg. 

          <br /><br />Outside of being an adventurer, Jalen is an avid skateboarder, writer, undercover pianist, and part-time urban forester who, more recently, has been working to become a recreational freediver. Those closest to him would describe him as incredibly spontaneous and a modern jack-of-all-trades. As he believes his greatest skill is his ability to learn new skills.
          {/*<br /><br /><br/><br/>Photo by Cullen Welch*/}
        </p>
      </div>
    </div>
  </div>
</section>
    <Footer />
  </Layout>
);

export default AboutPage;