import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import your components
import AnimalFacts from './AnimalFacts';
import AnimalStory from './AnimalStory';
import Marketplace from "./Marketplace.jsx";

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const [showModal, setShowModal] = useState(false);

    const checkDevice = () => {
        if (window.innerWidth > 768) {
            setShowModal(true);
        } else {
            setShowModal(false);
        }
    };

    useEffect(() => {
        checkDevice();
        setIsMenuOpen(false);
    }, [location.pathname]);

    return (
            <div className="flex flex-col items-center min-h-screen overflow-hidden">
                <ToastContainer />
                {showModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white p-8 rounded-xl text-center">
                            <h2 className="text-xl font-semibold text-blue-600">Akses aplikasi ini di perangkat seluler!</h2>
                            <p className="mt-4 text-gray-600">Aplikasi ini dioptimalkan untuk penggunaan di ponsel.</p>
                            <button
                                onClick={() => setShowModal(false)}
                                className="bg-blue-500 text-white py-2 px-6 rounded mt-4 hover:bg-blue-400"
                            >
                                Tutup
                            </button>
                        </div>
                    </div>
                )}
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
                                Fakta Hewan
                            </Link>
                            <Link to="/story" className={`block py-2 px-4 ${
                        location.pathname === "/story" ? "bg-gray-800 text-white" : "text-gray-400"
                        }`}>
                                Cerita Hewan
                            </Link>
                            <Link to="/marketplace" className={`block py-2 px-4 ${
                                location.pathname === "/marketplace" ? "bg-gray-800 text-white" : "text-gray-400"
                            }`}>
                                Beli Mainan
                            </Link>
                            <Link to="/membership" className={`block py-2 px-4 ${
                                location.pathname === "/membership" ? "bg-gray-800 text-white" : "text-gray-400"
                            }`}>
                                Mulai Berlangganan
                            </Link>
                        </div>
                    </div>
                )}

                <Routes>
                    <Route path="/" element={<AnimalFacts isMenuOpen={isMenuOpen} IsMenuOpen={isMenuOpen} />} />
                    <Route path="/story" element={<AnimalStory />} />
                    <Route path="/marketplace" element={<Marketplace />} />
                </Routes>
            </div>
    );
};

export default App;
