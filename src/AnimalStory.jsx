// src/AnimalStory.jsx
import React from 'react';

const AnimalStory = () => {
    return (
        <div
            style={{
                backgroundImage: 'url("/background.jpg")',
                backgroundRepeat: 'repeat',
                backgroundSize: 'auto',
            }}
            className="flex flex-col min-h-screen"
        >
            <div className="flex-grow p-8">
                <h2 className="text-2xl font-bold mb-4">Cerita Hewan</h2>
                <p className="text-gray-700">
                    Yuk baca cerita hewan yang terus update setiap hari!
                </p>
            </div>

            <footer className="w-full bg-gray-800 text-white text-center py-4 p-4">
                <p className="text-sm">
                    Semua audio diambil dari{' '}
                    <a href="https://pixabay.com" className="underline">
                        Pixabay
                    </a>{' '}
                    dan gambar hewan dihasilkan oleh AI.
                </p>
                <p className="text-sm">
                    Web dibuat oleh{' '}
                    <a href="https://ridho.work" className="underline">
                        Ridho Perdana
                    </a>
                </p>
            </footer>
        </div>
    );
};

export default AnimalStory;
