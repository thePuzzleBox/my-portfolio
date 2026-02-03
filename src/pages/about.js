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
          Jalen Smith is a nomadic filmmaker, documentary cinematographer, and conservation storyteller from Los Angeles, CA. After taking the path of community college, he graduated from Yale University with a B.A. studying film and political science. 
          Seeking experience in the field and behind a camera, Jalen started his career filming wildlife and teaching kids how to plant trees. He knew he had a passion for nature and for sharing it. 
          
          
          <br/><br/> Since then, Jalen's commitment to conservation and natural world storytelling has led him to work and film in communities worldwide. From sailing across Indonesia to planting trees across South America, he has found himself 
          in some of the most biodiverse regions on Earth, filming a vast tapestry of people, ecosystems, and alternative ways of life. As a result, he aims to not only share this wealth and knowledge of the
          natural world, but through capturing its stories of preservation, he hopes others learn what it means to be a part of it.


          <br /><br />Outside of being an adventurer, Jalen is an avid skateboarder, writer, undercover pianist, and urban forester who recently ventured into the word of freediving.
        </p>
      </div>
    </div>
  </div>
</section>
    <Footer />
  </Layout>
);

export default AboutPage;