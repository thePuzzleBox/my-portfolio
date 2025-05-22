import React, { useRef, useEffect, useState } from 'react';
import Layout from '../components/Layout2';

import '../assets/sass/_port.scss';
import '../assets/sass/_mobile.scss';

import pic1 from '../assets/images/shots/braz/DSC00164.jpg';
import pic1Hover from '../assets/images/shots/braz/DSC00162.jpg';

import clip from '../assets/images/fulls/vids/clip.mp4';
import gif from '../assets/images/fulls/vids/clip.gif';
import { Link } from 'gatsby';

const IndexPage = () => {
  const videoRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);
  const [isStillsHovered, setIsStillsHovered] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    setIsMobile(/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent));
  }, []);

  const media = isMobile ? gif : clip;

  const handleHover = () => {
    if (!isMobile && videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleLeave = () => {
    if (!isMobile && videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleStillsEnter = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsStillsHovered(true);
    }, 120);
  };

  const handleStillsLeave = () => {
    clearTimeout(hoverTimeoutRef.current);
    setIsStillsHovered(false);
  };

  return (
    <Layout hideFooter={true}>
      <div className="side">
        <article
          className="image-article"
          onMouseEnter={handleStillsEnter}
          onMouseLeave={handleStillsLeave}
        >
          <span className="image">
            <img src={isStillsHovered ? pic1Hover : pic1} alt="Stills" />
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