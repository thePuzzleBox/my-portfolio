import React, { useState, useRef } from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/bH25f59aO4I?enablejsapi=1&modestbranding=1&rel=0&showinfo=0"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="WN Video"
            ></iframe>
          </div>

          <div className="video-container" style={{ width: '50%', maxWidth: '1000px', paddingBottom: '50px', textAlign: 'center' }}>
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/t6AaEDmw9ak?enablejsapi=1&modestbranding=1&rel=0&showinfo=0"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Skate Video"
            ></iframe>
          </div>

          <div className="video-container" style={{ width: '50%', maxWidth: '1000px', paddingBottom: '50px', textAlign: 'center' }}>
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/7Lo8HUedzUs?enablejsapi=1&modestbranding=1&rel=0&showinfo=0"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Satellite Video"
            ></iframe>
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
};

export default VideoPage;
