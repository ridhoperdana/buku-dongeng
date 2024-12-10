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

const App = () => {
    const [selectedAnimal, setSelectedAnimal] = useState(null);
    const listRef = useRef(null);
    const [isFirstVisible, setIsFirstVisible] = useState(true);
    const [isLastVisible, setIsLastVisible] = useState(false);

    const handlePlaySound = () => {
        alert(`Playing sound for ${selectedAnimal?.name || 'Unknown'}`);
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
        const list = listRef.current;
        if (!list) return;

        // Update button states on scroll
        list.addEventListener('scroll', updateButtonState);
        updateButtonState();

        return () => {
            list.removeEventListener('scroll', updateButtonState);
        };
    }, []);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'animal',
        drop: (item) => setSelectedAnimal(item),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));

    const AnimalImage = ({ animal }) => {
        const [{ isDragging }, drag] = useDrag(() => ({
            type: 'animal',
            item: animal,
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

    return (
        <div className="flex flex-col items-center min-h-screen bg-blue-100">
            {/* Logo */}
            <div className="w-full p-4 bg-gray-800 text-white text-center">
                <h1 className="text-xl">BukuDongeng</h1>
            </div>

            {/* Animal Placeholder */}
            <div id="book-content" className="flex flex-col items-center w-full mt-8">
                <div
                    ref={drop}
                    className={`w-80 h-80 bg-white border-4 ${isOver ? 'border-green-500' : 'border-gray-300'}
                    flex items-center justify-center`}
                >
                    {selectedAnimal ? (
                        <img src={selectedAnimal.src} alt={selectedAnimal.name} className="w-full h-full object-cover" />
                    ) : (
                        <p>Drag an animal here</p>
                    )}
                </div>

                <button
                    onClick={handlePlaySound}
                    className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
                >
                    Play Sound
                </button>
            </div>

            {/* Animal List with Buttons */}
            <div className="fixed bottom-0 left-0 right-0 bg-gray-800 shadow p-4 flex items-center">
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
