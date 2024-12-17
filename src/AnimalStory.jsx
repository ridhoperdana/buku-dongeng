// src/AnimalStory.jsx
import React from 'react';

const AnimalStory = () => {
    return (
        <div style={{
            backgroundImage: 'url("/background.jpg")',
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto',
        }} className="p-8">
            <h2 className="text-2xl font-bold mb-4">Cerita Hewan</h2>
            <p className="text-gray-700">
                Yuk baca cerita hewan yang terus update setiap hari!
            </p>
        </div>
    );
};

export default AnimalStory;