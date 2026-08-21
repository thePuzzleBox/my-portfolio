import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer2';
import SocialLinks from '../components/SocialLinks';
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
          Jalen is a nomadic documentary filmmaker and conservation storyteller driven by a passion for bringing people closer to the natural world. At 21, he left home for South Africa purely to chase
          a dream of filming wildlife. Having no prior experience behind a camera, he somehow knew that's where he was meant to be and returned knowing how he wanted to spend the rest of his life.
          
          <br/><br/>His work looks beyond the surface of subject and place, exploring the underlying relationships nature reveals about the human experience.
          Filmmaking is his way of making the seemingly distant feel deeply personal. 
        
            <br/><br/>Based in Los Angeles, Jalen’s portfolio spans documentary film and photography in expedition environments on land and at sea. He currently freelances for OceanX and has worked
            with organizations such as The Nature Conservancy. Jalen earned his B.A. from Yale University after starting his education at community college.
            
            <br/><br/>When he’s not in the field, he can usually be found skateboarding, writing, planting trees big and small, or learning how to freedive.

          {/*Jalen Smith is a nomadic documentary filmmaker and conservation storyteller from Los Angeles, CA. His journey in conservation started with filming wildlife and teaching kids how to plant
           trees. Two very different experiences that solidified a lifelong passion for bringing people closer to the natural world.

            Since then, Jalen's commitment to this vision has led him to work and film in communities worldwide. From sailing across Indonesia to planting trees across South America, he has found himself in some
            of the most biodiverse regions on Earth, learning from and engaging with a diverse range of people, ecosystems, and alternative ways of life. As a result, he aims to not only share this wealth and
              knowledge of the natural world, but through capturing its stories of preservation, he hopes others learn what it means to be truly part of it.
            */}
        </p>
      </div>
    </div>
  </div>
</section>
    <SocialLinks/>
    <Footer />
  </Layout>
);

export default AboutPage;