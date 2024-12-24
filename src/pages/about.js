import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import portrait from '../assets/images/me1.jpg';

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
          Jalen Smith is a nomadic filmmaker and visual storyteller from Los Angeles, CA. He graduated studying film and political science at Yale College. Upon transferring from community college with 
          an extensive background in advocacy, Jalen sought to do meaningful work in visual storytelling. He aims to travel, capture the natural world, share its stories, and through his work, prompt others to ask themselves what it means to be a part of it.
          
          <br/><br/>Jalen dedicated his senior thesis to the ongoing energy crisis in South Africa, detailing the corruption and downfall of its major utility company, Eskom. In it, he recounts his experience living in the wild with the effects of a country's politics.

          <br /><br />Outside of being an adventurer, Jalen is an avid skateboarder, writer, undercover pianist, and urban forester who recently ventured into the world of freediving. Those closest to him would describe him as incredibly spontaneous and a modern jack-of-all-trades. As he believes his greatest skill is his ability to learn new skills.
        </p>
      </div>
    </div>
  </div>
</section>
    <Footer />
  </Layout>
);

export default AboutPage;