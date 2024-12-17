import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import your components
import AnimalFacts from './AnimalFacts';
import AnimalStory from './AnimalStory';

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Router>
            <div className="flex flex-col items-center min-h-screen bg-blue-50">
                <ToastContainer />
                <div className="w-full p-4 bg-gray-800 text-white shadow-lg flex justify-between items-center">
                    <h1 className="text-xl font-bold">BukuDongeng</h1>
                    <button
                        className="text-white focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        ☰
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg z-50 p-4 transition-transform transform translate-x-0">
                        <button
                            className="text-gray-800 focus:outline-none"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            ✕
                        </button>
                        <div className="mt-4">
                            <Link to="/" className="block text-grey-400 py-2 px-4 shadow-md">
                                Animal Facts
                            </Link>
                            <Link to="/story" className="block text-grey-400 py-2 px-4 shadow-md">
                                Animal Story
                            </Link>
                        </div>
                    </div>
                )}

                <Routes>
                    <Route path="/" element={<AnimalFacts />} />
                    <Route path="/story" element={<AnimalStory />} />
                </Routes>
                {/* Footer Section */}
                <footer className="w-full bg-gray-800 text-white text-center py-4 mt-8 p-4">
                    <p className='text-sm'>
                        Semua audio diambil dari <a href="https://pixabay.com" className="underline">Pixabay</a> dan gambar hewan dihasilkan oleh AI.
                    </p>
                    <p className='text-sm'>Web dibuat oleh <a href="https://ridho.work" className="underline">Ridho Perdana</a></p>
                </footer>
            </div>
        </Router>
    );
};

export default App;
