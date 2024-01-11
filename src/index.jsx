
import React from 'react';
import { createRoot } from 'react-dom/client';
import NoteApp from './components/NoteApp.jsx';
import { BrowserRouter } from 'react-router-dom';

// styling
import './styles/style.css'; 

const root = createRoot(document.getElementById('root'));
root.render(  <BrowserRouter>
    <NoteApp />
  </BrowserRouter>);