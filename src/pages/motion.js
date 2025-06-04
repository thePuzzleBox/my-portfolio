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
          
        <div className="video-container" style={{ paddingTop: '160px'}}>
            <div className="video-wrapper">
            <iframe
                ref={videoRefs.yasc}
                width="100%"
                height="500"
                src="https://youtube.com/embed/70i8n2uz5to?controls=1&rel=0&modestbranding=1"
                frameBorder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="yasc"
              ></iframe>
            </div>
            </div>
            
            
            <div className="video-container">
            <div className="video-wrapper">
            <iframe
                ref={videoRefs.grow}
                width="100%"
                height="500"
                src="https://youtube.com/embed/231F8qevHLg?controls=1&rel=0&modestbranding=1"
                frameBorder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="regrow"
              ></iframe>
            </div>
            </div>
        
        
        
        <div className="video-container">
        <div className="video-wrapper">
            <iframe
                ref={videoRefs.au}
                width="100%"
                height="500"
                src="https://youtube.com/embed/rpTR5hea4GE?controls=1&rel=0&modestbranding=1"
                frameBorder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="WNT"
              ></iframe>
            </div>
            </div>


           

          <div className="video-container">
            <div className="video-wrapper">
              <iframe
                ref={videoRefs.wn}
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/bH25f59aO4I?controls=1&rel=0&modestbranding=1"
                frameBorder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="WN"
              ></iframe>
            </div>
          </div>
          
          
          

        <div className="video-container">
            <div className="video-wrapper">
              <iframe
                ref={videoRefs.ox}
                width="100%"
                height="500"
                src="https://youtube.com/embed/cxsvWjbjeWQ?controls=1&rel=0&modestbranding=1"
                frameBorder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="oceanxplorers"
              ></iframe>
            </div>
          </div>
          


          
        <div className="video-container">
            <div className="video-wrapper">
            <iframe
                ref={videoRefs.tnc}
                width="100%"
                height="500"
                src="https://youtube.com/embed/5s2WVWY5fGU?controls=1&rel=0&modestbranding=1"
                frameBorder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="TNC"
              ></iframe>
            </div>
          </div>

          {/*<div className="video-container">  
            <div className="video-wrapper">
            <iframe
                ref={videoRefs.tnc2}
                width="100%"
                height="500"
                src="https://youtube.com/embed/A1xf2RrvUOk?controls=1&rel=0&modestbranding=1"
                frameBorder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="TNC2"
              ></iframe>
            </div>
          </div>*/}
          
          <div className="video-container">
            <div className="video-wrapper">
              <iframe
                ref={videoRefs.lifelines}
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/l0LHeM6Khr0?controls=1&rel=0&modestbranding=1"
                frameBorder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="lifelines"
              ></iframe>
            </div>
          </div>



          
          <div className="video-container">
            <div className="video-wrapper">
              <iframe
                ref={videoRefs.skate}
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/t6AaEDmw9ak?controls=1&rel=0&modestbranding=1"
                frameBorder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="skate"
              ></iframe>
            </div>
          </div>

          

          

          {/*<div className="video-container">
            <div className="video-wrapper">
              <iframe
                ref={videoRefs.satellite}
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/7Lo8HUedzUs?controls=1&rel=0&modestbranding=1"
                frameBorder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="satellite"
              ></iframe>
            </div>
          </div>*/}

          <div className="video-container">
            <div className="video-wrapper">
              <iframe
                ref={videoRefs.photo}
                width="100%"
                height="500"
                src="https://youtube.com/embed/1UZ2VDcOa9I?controls=1&rel=0&modestbranding=1"
                //photo src="https://youtube.com/embed/RsK_VVAskJE?controls=1&rel=0&modestbranding=1"
                frameBorder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="photo"
              ></iframe>
            </div>
          </div>
          
        </div>
      </section>
      <Footer />
    </Layout>
  );
};

export default VideoPage;
