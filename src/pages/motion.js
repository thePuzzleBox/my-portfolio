import React, { useState, useRef } from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';

import wn from '../assets/images/wn.mp4';
import satellite from '../assets/images/fulls/vids/satellite.mp4';
import skate from '../assets/images/fulls/vids/skate.mp4';

const VideoPage = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const videoRefs = {
    wn: useRef(null),
    skate: useRef(null),
    satellite: useRef(null),
  };

  const handleVideoPlay = (videoKey) => {
    if (currentlyPlaying !== videoKey) {
      if (currentlyPlaying && videoRefs[currentlyPlaying].current) {
        videoRefs[currentlyPlaying].current.pause();
      }
      setCurrentlyPlaying(videoKey);
    }
  };

  return (
    <Layout>
      <Header />
      <section style={{ minHeight: '100vh' }}>
        <div className="app" style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
          <div className="video-container" style={{ width: '50%', maxWidth: '1000px', paddingBottom: '50px', paddingTop: '150px', textAlign: 'center' }}>
            <video ref={videoRefs.wn} controls onPlay={() => handleVideoPlay('wn')}>
              <source src={wn} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="video-container" style={{ width: '50%', maxWidth: '1000px', paddingBottom: '50px', textAlign: 'center' }}>
            <video ref={videoRefs.skate} controls onPlay={() => handleVideoPlay('skate')}>
              <source src={satellite} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="video-container" style={{ width: '50%', maxWidth: '1000px', paddingBottom: '50px', textAlign: 'center' }}>
            <video ref={videoRefs.satellite} controls onPlay={() => handleVideoPlay('satellite')}>
              <source src={skate} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
};

export default VideoPage;
