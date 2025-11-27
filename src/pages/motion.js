import React, { useState, useRef } from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';

const VideoPage = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const videoRefs = {
    wn: useRef(null),
    skate: useRef(null),
    ox: useRef(null),
    yasc: useRef(null),
    au: useRef(null),
    grow: useRef(null),
    tnc: useRef(null),
    // tnc2: useRef(null),
    lifelines: useRef(null),
    // satellite: useRef(null),
    photo: useRef(null),
  };

  const handleVideoPlay = (videoKey) => {
    if (currentlyPlaying !== videoKey) {
      if (currentlyPlaying && videoRefs[currentlyPlaying].current) {
        videoRefs[currentlyPlaying].current.pause();
      }
      setCurrentlyPlaying(videoKey);
    }
  };

  // Video list (with comments for excluded videos)
  const videos = [
    { ref: videoRefs.yasc, src: 'https://youtube.com/embed/yW_stTSn6HU', title: 'yasc' },
    { ref: videoRefs.grow, src: 'https://youtube.com/embed/231F8qevHLg', title: 'regrow' },
    { ref: videoRefs.au, src: 'https://youtube.com/embed/rpTR5hea4GE', title: 'WNT' },
    { ref: videoRefs.wn, src: 'https://www.youtube.com/embed/bH25f59aO4I', title: 'WN' },
    // { ref: videoRefs.ox, src: 'https://youtube.com/embed/cxsvWjbjeWQ', title: 'OX' },
    { ref: videoRefs.tnc, src: 'https://youtube.com/embed/5s2WVWY5fGU', title: 'TNC' },
    // { ref: videoRefs.tnc2, src: 'https://youtube.com/embed/A1xf2RrvUOk', title: 'TNC2' },
    { ref: videoRefs.lifelines, src: 'https://www.youtube.com/embed/l0LHeM6Khr0', title: 'lifelines' },
    { ref: videoRefs.skate, src: 'https://youtube.com/embed/t6AaEDmw9ak', title: 'skate' },
    // { ref: videoRefs.satellite, src: 'https://www.youtube.com/embed/7Lo8HUedzUs', title: 'satellite' },
    { ref: videoRefs.photo, src: 'https://youtube.com/embed/1UZ2VDcOa9I', title: 'photo' },
  ];

  return (
    <Layout>
      <Header />
      <section style={{ minHeight: '100vh' }}>
        <div className="app" style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
          
          
          <div
            className="video-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '30px',
              width: '100%',
              maxWidth: '1400px',
              paddingTop: '160px',
              paddingBottom: '50px',
            }}
          >
            {videos.map((video, idx) => (
              <div
                key={idx}
                className="video-wrapper"
                style={{
                  width: '100%',
                  position: 'relative',
                  paddingBottom: '56.25%', // 16:9 aspect ratio
                  margin: '0', // desktop default
                }}
              >
                <iframe
                  ref={video.ref}
                  src={`${video.src}?controls=1&rel=0&modestbranding=1`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />



      {/* Mobile + iPad */}
      <style>
        {`

              @media (min-width: 768px) and (max-width: 1024px) {
                .video-grid {
                  padding-left: 30px;
                  padding-right: 30px;
                }
              }

                @media (max-width: 768px) {
              .video-wrapper {
                margin: 20px 0;
              }
              .video-grid {
                grid-template-columns: 1fr !important;
                padding: 0 25px; /* side margins */
              }
            }


        `}
      </style>
    </Layout>
  );
};

export default VideoPage;
