import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="665128139597-8n0mcb9ccr4aksadp2if8c8mahjvl7ti.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
