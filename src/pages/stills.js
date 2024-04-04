import React, { useRef, useEffect, useState } from 'react';
import Layout from '../components/Layout2';

import '../assets/sass/_port.scss';
import '../assets/sass/_mobile.scss';

import pic1 from '../assets/images/shots/001.jpg';
import pic2 from '../assets/images/shots/au/26.jpg';
import { Link } from 'gatsby';

const IndexPage = () => {
  
  return (
    <Layout hideFooter={true}>
      <div className="side">
        <article className="image-article">
          <span className="image">
            <img src={pic1} alt="Stills" />
          </span>
          <Link to="/stills/sa">
            <div className="content">
              <h2>south africa</h2>
            </div>
          </Link>
        </article>

        <article className="image-article">
          <span className="image">
            <img src={pic2} alt="Stills" />
          </span>
          <Link to="/stills/au">
            <div className="content">
              <h2>aruba</h2>
            </div>
          </Link>
        </article>
      </div>
    </Layout>
  );
};

export default IndexPage;
