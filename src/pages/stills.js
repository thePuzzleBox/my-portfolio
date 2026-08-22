import React from "react";

import Layout from '../components/Layout2';
import '../assets/sass/_port.scss';
import '../assets/sass/_mobile.scss';

import pic1 from '../assets/images/shots/sa/001.jpg';
import pic2 from '../assets/images/peak.jpg';
import pic3 from '../assets/images/shots/plant/088.jpg';
import pic4 from '../assets/images/shots/ox/lucia.jpg'; //au/44.jpg'; 


import { Link } from 'gatsby';

const IndexPage = () => {
  return (
    <Layout hideFooter={true}>
      <div className="side">

        <article className="image-article">
          <span className="image">

            <img src={pic1} alt="Default" />
            
          </span>
          <Link to="/stills/sa">
            <div className="content stills-text">
              <h2>SAFARI</h2>
              <h3><i>& Wildlife</i></h3>
            </div>
          </Link>
        </article>

        <article className="image-article">
          <span className="image">

            <img src={pic2} alt="Stills"/>
          </span>

          <Link to="/stills/">
            <div className="content stills-text">
              <h2>MOUNTAINS</h2>
              <h3><i>& Glaciers</i></h3>
              <h3><i>coming soon</i></h3>
            </div>
          </Link>
        </article>

        <article className="image-article">
          <span className="image">

            <img src={pic3} alt="Stills" />
          </span>
          <Link to="/stills/plants">
            <div className="content stills-text">
              <h2>RAINFORESTS</h2>
              <h3><i>& Plants</i></h3>
            </div>
          </Link>
        </article>

        <article className="image-article">
          <span className="image">

            <img src={pic4} alt="Stills"/>

          </span>
          <Link to="/stills/ox">
            <div className="content stills-text">
            <h2>OCEANS</h2>
            <h3><i>& Islands</i></h3>
            </div>
          </Link>
        </article>
      </div>
    </Layout>
  );
};


export default IndexPage;
