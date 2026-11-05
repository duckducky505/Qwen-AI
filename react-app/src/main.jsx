import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

/* fadeUp keyframes used by tour-card filter animation */
const styleTag = document.createElement('style');
styleTag.textContent =
  '@keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}';
document.head.appendChild(styleTag);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
