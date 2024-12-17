import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import your components
import AnimalFacts from './AnimalFacts';
import AnimalStory from './AnimalStory';

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    return (
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
                    <div className="shadow-md fixed inset-y-0 right-0 w-64 bg-white z-50 transition-transform transform translate-x-0">
                        <button
                            className="text-gray-800 focus:outline-none p-4"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            ✕
                        </button>
                        <div className="mt-4">
                            <Link to="/" className={`block py-2 px-4 ${
                        location.pathname === "/" ? "bg-gray-800 text-white" : "text-gray-400"
                        }`}>
                                Animal Facts
                            </Link>
                            <Link to="/story" className={`block py-2 px-4 ${
                        location.pathname === "/story" ? "bg-gray-800 text-white" : "text-gray-400"
                        }`}>
                                Animal Story
                            </Link>
                        </div>
                    </div>
                )}

                <Routes>
                    <Route path="/" element={<AnimalFacts isMenuOpen={isMenuOpen} IsMenuOpen={isMenuOpen} />} />
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
    );
};

export default App;
