// src/AnimalStory.jsx
import React from 'react';

const AnimalStory = () => {
    return (
        <div style={{
            backgroundImage: 'url("/background.jpg")',
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto',
        }} className="p-8">
            <h2 className="text-2xl font-bold mb-4">Animal Story</h2>
            <p className="text-gray-700">
                Here you can add your animal stories. This is a placeholder for the animal story content.
            </p>
        </div>
    );
};

export default AnimalStory;