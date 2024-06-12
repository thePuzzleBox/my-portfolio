import React, { useState, useRef } from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';

import satellite from '../assets/images/fulls/vids/satellite.mp4';

const VideoPage = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const videoRefs = {
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
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', background: '#000', marginBottom: '5px' }}>
              <iframe
                title="wn"
                src="https://www.youtube.com/embed/bH25f59aO4I?rel=0&modestbranding=1&showinfo=0&controls=1&autoplay=0"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="video-container" style={{ width: '50%', maxWidth: '1000px', paddingBottom: '50px', textAlign: 'center' }}>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', background: '#000', marginBottom: '5px' }}>
              <iframe
                title="skate"
                src="https://www.youtube.com/embed/t6AaEDmw9ak?rel=0&modestbranding=1&showinfo=0&controls=1&autoplay=0"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="video-container" style={{ width: '50%', maxWidth: '1000px', paddingBottom: '50px', textAlign: 'center' }}>
            <video ref={videoRefs.satellite} controls onPlay={() => handleVideoPlay('satellite')}>
              <source src={satellite} type="video/mp4" />
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
