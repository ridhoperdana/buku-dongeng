import React from 'react';
import ReactDOM from 'react-dom/client';
import { DndProvider } from 'react-dnd';
import { TouchBackend } from 'react-dnd-touch-backend'
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <DndProvider backend={TouchBackend}>
        <App />
    </DndProvider>
);
