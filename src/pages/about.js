import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer2';
import portrait from '../assets/images/mee.jpg';

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
          Jalen Smith is a nomadic filmmaker, documentary cinematographer, and conservation storyteller from Los Angeles, CA. His unique journey into conservation film started with filming wildlife and teaching kids how to plant trees.
          Two very different experiences that solidified a lifelong passion for bringing people closer to the natural world.
          
          <br/><br/> Since then, Jalen's commitment to this vision has led him to work and film in communities worldwide. From sailing across Indonesia to planting trees across South America, he has found himself 
          in some of the most biodiverse regions on Earth, filming a vast tapestry of people, ecosystems, and alternative ways of life. As a result, he aims to not only share this wealth and knowledge of the
          natural world, but through capturing its stories of preservation, he hopes others learn what it means to be truly part of it.


          <br /><br />Jalen has worked with companies such as The Nature Conservancy and OceanX, and holds a B.A. from Yale University after beginning his academic journey at community college. 
          Today, Jalen seeks purpose-driven work at the intersection of conservation and human connection. 
          <br /><br />When he’s not in the field, he can usually be found skateboarding, writing, planting trees big and small, or learning how to freedive.
        </p>
      </div>
    </div>
  </div>
</section>
    <Footer />
  </Layout>
);

export default AboutPage;