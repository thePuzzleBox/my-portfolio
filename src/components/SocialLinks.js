import React from 'react';
import config from '../../config';

export default function SocialLinks() {
  return (
    <section
      className="social-section"
      style={{
        paddingTop: '0',
        paddingBottom: '0',
        margin: '0',
      }}
    >
      <div className="container">
        <div className="social d-flex justify-content-center">
          {config.socialLinks.map(social => {
            const { icon, url } = social;
            return (
              <a key={url} href={url} className="mx-3">
                <i className={`fab ${icon}`}></i>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}