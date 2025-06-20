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
        <h2 className="fg text-black mb-4 text-center">{/*possible title */}</h2>
        <p className="fg text-black">
          Jalen Smith is a nomadic filmmaker and conservation storyteller from Los Angeles, CA. He graduated studying film and political science at Yale College. Upon transferring from community college with 
          an extensive background in advocacy, Jalen sought to do meaningful work in visual storytelling. Having lived in some of the most remote places on Earth, he aims to capture the natural world, share its stories of preservation, and prompt others to ask themselves what it means to be a part of it.
          
          <br/><br/> Taking the opportunity to live in the wild of South Africa, Jalen found his passion for nature and for sharing it. This experience served as the basis for his senior thesis. When he returned home in 2023, Jalen became an urban forester, teaching high school students 
          how to plant and take care of trees. And since then, his commitment to conservation and storytelling has led him to plant and film in communities worldwide.

          <br /><br />Outside of being an adventurer, Jalen is an avid skateboarder, writer, undercover pianist, and animal lover who recently ventured into the world of freediving. Those closest to him would describe him as incredibly spontaneous and a modern jack-of-all-trades.
        </p>
      </div>
    </div>
  </div>
</section>
    <Footer />
  </Layout>
);

export default AboutPage;