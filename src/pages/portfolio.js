import React, { useRef, useEffect, useState } from 'react';
import Layout from '../components/Layout2';

import '../assets/sass/_port.scss';
import '../assets/sass/_mobile.scss';

import pic1 from '../assets/images/jon2.jpg';
import clip from '../assets/images/fulls/vids/clip.mp4';
import gif from '../assets/images/fulls/vids/clip.gif';
import { Link } from 'gatsby';

const IndexPage = () => {
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    setIsMobile(/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent));
  }, []);

  const media = isMobile ? gif : clip;

  const handleHover = () => {
    if (isMobile) {
      // Add your logic for handling hover/click effects on mobile
      // For example, you can update state variables to control the styles
      // You can also play the gif here if needed
    } else if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleLeave = () => {
    if (isMobile) {
      // Add your logic for leaving hover state on mobile
    } else if (videoRef.current) {
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
            {isMobile ? (
              <img src={media} alt="Motion" />
            ) : (
              <video ref={videoRef} loop muted playsInline>
                <source src={media} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
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