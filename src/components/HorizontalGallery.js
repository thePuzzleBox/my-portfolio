import React, { useRef } from 'react';
import '../assets/sass/_hgallery.scss';

const HorizontalGallery = ({ images }) => {
  const galleryRef = useRef(null);

  // Drag-to-scroll horizontally
  const onMouseDown = (e) => {
    const gallery = galleryRef.current;
    gallery.isDragging = true;
    gallery.startX = e.pageX - gallery.offsetLeft;
    gallery.scrollLeftStart = gallery.scrollLeft;
  };

  const onMouseLeave = () => {
    galleryRef.current.isDragging = false;
  };

  const onMouseUp = () => {
    galleryRef.current.isDragging = false;
  };

  const onMouseMove = (e) => {
    const gallery = galleryRef.current;
    if (!gallery.isDragging) return;
    e.preventDefault();
    const x = e.pageX - gallery.offsetLeft;
    const walk = x - gallery.startX;
    gallery.scrollLeft = gallery.scrollLeftStart - walk;
  };

  return (
    <div
      className="horizontal-gallery"
      ref={galleryRef}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      {images.map((src, idx) => (
        <article key={idx}>
          <span className="image">
            <img src={src} alt={`Gallery ${idx + 1}`} />
          </span>
        </article>
      ))}
    </div>
  );
};

export default HorizontalGallery;
