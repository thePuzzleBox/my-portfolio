import React from 'react';


import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer2';
import portrait from '../assets/images/mee1.jpg';

const AboutPage = () => (
  <Layout>
    <Header />

    <section id="about" className="about-section text-left">
  <div className="container">
    <div className="row">

      <div className="about-image">
        <img src={portrait} className="img-fluid" alt="" />
      </div>

          <div className="col-lg-7">
            <h2 className="fg text-black mb-4 text-center">{/*possible title */}</h2>

            <p className="fg text-black">
              Jalen is a nomadic documentary filmmaker and conservation storyteller passionate about bringing people closer to the natural world. At 21, he left home for South Africa purely to chase
              a dream of filming wildlife. Without any prior experience behind a camera, he knew that's where he needed to be. After living among untamed giants and experiencing a deeply connected
              way of life, he didn't just find what he was looking for. He returned having found what he wanted to dedicate his life to.

              <br/><br/>Using visual storytelling to make seemingly distant worlds feel deeply personal, Jalen captures our complex relationships with nature and what they reveal about the human experience
              and our role in bettering it.

              <br/><br/>Jalen’s portfolio spans documentary film and photography in expedition environments across land and sea. Based in Los Angeles, he currently freelances for OceanX and has worked
              with organizations such as The Nature Conservancy. He earned his B.A. from Yale University after starting his education at community college.

              <br/><br/>When he’s not in the field, he can usually be found sitting at a piano, skateboarding, planting trees big and small, or learning how to freedive.

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
    <Footer />
  </Layout>
);

export default AboutPage;