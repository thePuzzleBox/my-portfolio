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
          Jalen is a nomadic documentary filmmaker and conservation storyteller driven by a passion for bringing people closer to nature. At 21, he left home for South Africa purely to chase
          a dream of filming wildlife. Despite having no prior experience behind a camera, he knew that's where he wanted to be and returned knowing exactly the kind of life he wanted to live. One
          dedicated to protecting the natural world and telling the stories that deepen our connection to it.
          
          <br/><br/>Jalen believes the most powerful stories are the ones that reveal part of the human experience. He seeks relationships of vulnerability, resilience, and connection to place, to
           recognize something in ourselves that affects how we see the world around us. Because it is through connection that something so distant becomes deeply personal. 
        

            <br/><br/>Based in Los Angeles, Jalen’s work spans documentary film and photography in expedition-based environments on land and at sea. He currently freelances for OceanX and has worked
            with organizations such as The Nature Conservancy. Jalen earned his B.A. from Yale University after starting his education at community college.
            
            <br/><br/>When he’s not in the field, he can usually be found skateboarding, writing, planting
            trees big and small, or learning how to freedive.

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