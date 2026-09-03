import React from 'react';
import { useLocation } from '@reach/router';

export default function Footer() {
  const location = useLocation();
  const isIndexPage = location.pathname === '/';

  return (
    <footer
      className={`foot small text-center ${
        isIndexPage ? 'bg-black text-white-50' : 'page-footer'
      }`}
    >
      <div className="container">
        {isIndexPage ? (
          <>&copy; 2026</>
        ) : (
          <>&copy; 2026 | Made by Heart.</>
        )}
      </div>
    </footer>
  );
}