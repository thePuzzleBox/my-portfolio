import React, { useEffect, useRef, useState } from 'react';


import '../assets/sass/_featured.scss';
import color from '../assets/images/color.jpg';

const Featured = () => {
  const featuredRef = useRef(null);
  const [featuredVisible, setFeaturedVisible] = useState(false);

  useEffect(() => {
    const section = featuredRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFeaturedVisible(true);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={featuredRef}
      className={`featured py-5 ${featuredVisible ? 'is-visible' : ''}`}
    >
      <div className="container-fluid px-0">
        <div className="row no-gutters align-items-center">

          <div className="col-lg-6 featured-image-column">
            <div className="featured-image-wrapper">
              <a
                href="https://alumni.yale.edu/news/peru-close-week-yale-alumni-service-corps"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={color}
                  alt="film poster"
                  className="img-fluid featured-image"
                />
              </a>
            </div>
          </div>

          <div className="col-lg-6 featured-text-column">
            <div className="featured-text-wrapper">
              <div className="featured-text">
                <h4>
                  <a
                    href="https://alumni.yale.edu/news/peru-close-week-yale-alumni-service-corps"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i>Living in Color (2026)</i>
                  </a>
                </h4>
                <br />
                <h5>Documentary Short</h5>
                <br />
                <p>
                  Set in a community in Ancon, Peru, the film follows two volunteers during with the Yale Alumni Service Corps. Through their individual experiences with each other
                  and the community, they gain a deeper understanding of themselves and their place in the world around them.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Featured;