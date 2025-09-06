import React from "react";

import Layout from '../components/Layout2';
import '../assets/sass/_port.scss';
import '../assets/sass/_mobile.scss';

import pic1 from '../assets/images/shots/sa/001.jpg';
import pic2 from '../assets/images/peak.jpg';
import pic3 from '../assets/images/shots/plant/046.jpg';
import pic4 from '../assets/images/shots/ox/lucia.jpg';


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
            <div className="content">
              <h2>safari</h2>
              <h3><i>& wildlife</i></h3>
            </div>
          </Link>
        </article>

        <article className="image-article">
          <span className="image">

            <img src={pic2} alt="Stills"/>
          </span>

          <Link to="/stills/">
            <div className="content">
              <h2>mountains</h2>
              <h3><i>coming soon</i></h3>
            </div>
          </Link>
        </article>

        <article className="image-article">
          <span className="image">

            <img src={pic3} alt="Stills" />
          </span>
          <Link to="/stills/planting">
            <div className="content">
              <h2>plants</h2>
              <h3><i>& forests</i></h3>
            </div>
          </Link>
        </article>

        <article className="image-article">
          <span className="image">

            <img src={pic4} alt="Stills"/>

          </span>
          <Link to="/stills/ox">
            <div className="content">
            <h2>oceans</h2>
            <h3><i>& islands</i></h3>
            </div>
          </Link>
        </article>
      </div>
    </Layout>
  );
};


export default IndexPage;
