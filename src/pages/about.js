import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer2';
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
          an extensive background in advocacy, Jalen sought to do meaningful work in visual storytelling. Since then, his commitment to conservation and storytelling has led him to work and film in communities worldwide.
          
          
          <br/><br/> Having lived in some of the most remote places on Earth, Jalen found his passion for nature and for sharing it. From sailing across Indonesia to planting trees across South America, he has found himself
          in the presence of exceptionally diverse fauna, people, ecosystems, and their alternative ways of life. As a result, he aims to share this wealth and knowledge of the natural world, and through its stories of preservation,
          he hopes others find their place in it too.


          <br /><br />Outside of being an adventurer, Jalen is an avid skateboarder, writer, undercover pianist, and urban forester who recently ventured into the world of freediving.
        </p>
      </div>
    </div>
  </div>
</section>
    <Footer />
  </Layout>
);

export default AboutPage;