import React, { useRef } from 'react';
import Layout from '../components/Layout2';

import '../assets/sass/_port.scss';
import '../assets/sass/_mobile.scss';

import pic1 from '../assets/images/shots/43.jpg';
import clip from '../assets/images/fulls/vids/clip.mp4';
import { Link } from 'gatsby';

const IndexPage = () => {
  const videoRef = useRef(null);

  const handleHover = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <Layout hideFooter={true}>
      <div className="side">
        <article className="image-article">
          <span className="image">
            <img src={pic1} alt="Stills" />
          </span>
          <Link to="/stills">
            <div className="content">
              <h2>STILLS</h2>
            </div>
          </Link>
        </article>

        <article
          className="video-article"
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <span className="image">
            <video ref={videoRef} loop muted playsInline>
              <source src={clip} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </span>
          <Link to="/motion">
            <div className="content">
              <h2>MOTION</h2>
            </div>
          </Link>
        </article>
      </div>
    </Layout>
  );
};

export default IndexPage;
