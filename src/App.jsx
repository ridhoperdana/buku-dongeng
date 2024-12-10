import React, { useRef, useState, useEffect } from 'react';
import { useDrag, useDrop } from 'react-dnd';

const animalImages = [
    { id: 1, name: "Lion", src: "/lion.webp" },
    { id: 2, name: "Tiger", src: "/tiger.webp" },
    { id: 3, name: "Monkey", src: "/monkey.webp" },
    { id: 4, name: "Tiger", src: "/tiger.webp" },
    { id: 5, name: "Lion", src: "/lion.webp" },
    // Add more animal images as needed
];

const imageUploader = [
    {
        id: 1,
        name: "Lion",
        facts: [
            "Hewan ini sering disebut raja hutan",
            "Hewan ini tinggal di dataran rendah",
            "Hewan ini untuk yang jantan memiliki rambut yang panjang",
        ],
        soundURL: '/lion.mp3',
    },
    {
        id: 2,
        name: "Tiger",
        facts: [
            "Hewan ini adalah pemangsa puncak",
            "Hewan ini hidup di hutan tropis",
        ],
        soundURL: '/tiger.mp3',
    },
    {
        id: 3,
        name: "Monkey",
        facts: [
            "Hewan ini sangat cerdas",
            "Hewan ini tinggal di hutan tropis",
        ],
        soundURL: '/monkey.mp3',
    },
];

const App = () => {
    const [droppedImages, setDroppedImages] = useState({});
    const listRef = useRef(null);
    const [isFirstVisible, setIsFirstVisible] = useState(true);
    const [isLastVisible, setIsLastVisible] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handlePlaySound = (soundURL) => {
        const audio = new Audio(soundURL);
        audio.play();
    };

    // Detect if the user is on desktop (large screen) or mobile
    const checkDevice = () => {
        if (window.innerWidth > 768) {
            setShowModal(true); // Show modal if on desktop
        } else {
            setShowModal(false); // Hide modal if on mobile
        }
    };

    const slideList = (direction) => {
        const list = listRef.current;
        if (!list) return;

        const scrollAmount = 200; // Number of pixels to scroll
        list.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
    };

    const updateButtonState = () => {
        const list = listRef.current;
        if (!list) return;

        const { scrollLeft, scrollWidth, clientWidth } = list;

        setIsFirstVisible(scrollLeft <= 0);
        setIsLastVisible(scrollLeft + clientWidth >= scrollWidth);
    };

    useEffect(() => {
        checkDevice(); // Check on initial load
        window.addEventListener('resize', checkDevice); // Listen for window resize

        return () => {
            window.removeEventListener('resize', checkDevice);
        };

        const list = listRef.current;
        if (!list) return;

        // Update button states on scroll
        list.addEventListener('scroll', updateButtonState);
        updateButtonState();

        return () => {
            list.removeEventListener('scroll', updateButtonState);
        };
    }, []);

    const AnimalImage = ({ animal }) => {
        const [{ isDragging }, drag] = useDrag(() => ({
            type: 'animal',
            item: { ...animal },
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
            }),
        }));

        return (
            <div ref={drag} className="p-2 shrink-0">
                <img
                    src={animal.src}
                    alt={animal.name}
                    className={`w-32 h-32 object-cover cursor-pointer ${isDragging ? 'opacity-50' : ''}`}
                />
            </div>
        );
    };

    const Card = ({ animal, cardId }) => {
        const [{ isOver }, drop] = useDrop(() => ({
            accept: 'animal',
            drop: (item) => {
                // Handle dropping the image on the correct card
                setDroppedImages((prevState) => ({
                    ...prevState,
                    [cardId]: {
                        ...item,
                        isCorrect: item.id === animal.id, // Check if the drop is correct
                    },
                }));
            },
            collect: (monitor) => ({
                isOver: monitor.isOver(),
            }),
        }));

        return (
            <div
                ref={drop}
                className={`w-full p-4 bg-white border-4 border-gray-300 flex flex-col items-center mb-4`}
            >
                {/* Facts */}
                <div className="mb-4">
                    <h3 className="font-semibold">Facts:</h3>
                    <ul>
                        {animal.facts.map((fact, index) => (
                            <li key={index} className="mb-1">{fact}</li>
                        ))}
                    </ul>
                </div>

                {/* Play Sound Button */}
                <button
                    onClick={() => handlePlaySound(animal.soundURL)}
                    className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
                >
                    Play Sound
                </button>

                {/* Drop Area */}
                <div
                    className={`w-80 h-80 bg-white border-4 ${isOver ? 'border-green-500' : 'border-gray-300'} flex items-center justify-center`}
                >
                    {droppedImages[cardId]?.id === animal.id ? (
                        <div className="text-center">
                            <img
                                src={droppedImages[cardId]?.src}
                                alt={droppedImages[cardId]?.name}
                                className="w-full h-full object-cover"
                            />
                            <p className="mt-4 text-green-500">Jawaban kamu benar!</p>
                        </div>
                    ) : droppedImages[cardId]?.id ? (
                        <div className="text-center">
                            <img
                                src={droppedImages[cardId]?.src}
                                alt={droppedImages[cardId]?.name}
                                className="w-full h-full object-cover"
                            />
                            <p className="mt-4 text-red-500">Jawaban kamu salah!</p>
                        </div>
                    ) : (
                        <p>Drag an animal here</p>
                    )}
                </div>
            </div>
        );
    };

    return (
        <div className={`flex flex-col items-center min-h-screen bg-blue-100 ${showModal ? 'blurred' : ''}`}>
            {/* Modal for Desktop Access */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-lg text-center">
                        <h2 className="text-xl font-semibold">Please access this web app on a mobile device!</h2>
                        <p className="mt-4 text-gray-600">This app is optimized for mobile use.</p>
                        <button
                            onClick={() => setShowModal(false)}
                            className="bg-blue-500 text-white py-2 px-6 rounded mt-4"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
            {/* Logo */}
            <div className="w-full p-4 bg-gray-800 text-white text-center">
                <h1 className="text-xl">BukuDongeng</h1>
            </div>

            {/* Animal Placeholder */}
            <div
                id="book-content"
                className="flex flex-col items-center w-full mt-8"
                style={{ paddingBottom: '160px' }} // Adjusted bottom padding for the floating section height
            >
                {imageUploader.map((animal) => (
                    <Card key={animal.id} animal={animal} cardId={animal.id} />
                ))}
                {/* Footer Section */}
                <footer className="w-full bg-gray-800 text-white text-center py-4 mt-8">
                    <p>
                        All audio is retrieved from <a href="https://pixabay.com" className="underline">Pixabay</a> and animal pictures are generated by ChatGPT.
                    </p>
                </footer>
            </div>

            {/* Animal List with Buttons */}
            <div className="fixed bottom-0 left-0 right-0 bg-gray-800 shadow p-4 flex items-center z-10">
                <button
                    className={`py-2 px-4 rounded-full absolute left-4 text-white transition-colors ${
                        isFirstVisible ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
                    }`}
                    onClick={() => !isFirstVisible && slideList('left')}
                    disabled={isFirstVisible}
                >
                    ◀
                </button>

                <div ref={listRef} className="flex gap-4 overflow-x-hidden w-full px-12">
                    {animalImages.map((animal) => (
                        <AnimalImage key={animal.id} animal={animal} />
                    ))}
                </div>

                <button
                    className={`py-2 px-4 rounded-full absolute right-4 text-white transition-colors ${
                        isLastVisible ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
                    }`}
                    onClick={() => !isLastVisible && slideList('right')}
                    disabled={isLastVisible}
                >
                    ▶
                </button>
            </div>
        </div>
    );
};

export default App;
