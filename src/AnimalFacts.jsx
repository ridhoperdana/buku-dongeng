import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useDrag, useDrop, useDragLayer } from 'react-dnd';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const animalImages = [
    { id: 1, name: "Lion", src: "/lion.webp", alt: "Singa" },
    { id: 2, name: "Tiger", src: "/tiger.webp", alt: "Harimau" },
    { id: 3, name: "Monkey", src: "/monkey.webp", alt: "Monyet" },
    { id: 4, name: "Parrot", src: "/parrot.webp", alt: "Beo" },
    { id: 5, name: "Giraffe", src: "/giraffe.webp", alt: "Jerapah" },
    { id: 6, name: "Elephant", src: "/elephant.webp", alt: "Gajah" },
    { id: 7, name: "Cat", src: "/cat.webp", alt: "Kucing" },
    { id: 8, name: "Dog", src: "/dog.webp", alt: "Anjing" },
    { id: 9, name: "Duck", src: "/duck.webp", alt: "Bebek" },
    // Add more animal images as needed
];

const imageUploader = [
    {
        id: 1,
        name: "Lion",
        facts: [
            "Tahukah kamu, singa sering disebut sebagai raja hutan? Mereka kuat, pemberani, dan suaranya menggelegar seperti raja sejati!",
            "Meskipun disebut raja hutan, singa sebenarnya lebih suka tinggal di padang rumput yang luas. Mereka bisa berlari dengan cepat untuk mengejar mangsa.",
            "Singa jantan memiliki surai atau rambut panjang di lehernya. Itu seperti mahkota mereka yang menunjukkan kekuatan dan keberanian.",
            "Singa hidup dalam kelompok yang disebut kawanan. Dalam kawanan ini, mereka saling membantu untuk berburu dan menjaga satu sama lain.",
            "Tahukah kamu? Singa betina adalah pemburu utama dalam kawanan. Mereka sangat cerdas dan bekerja sama untuk menangkap mangsa.",
            "Singa memiliki pendengaran yang sangat tajam. Mereka bisa mendengar suara mangsa dari jarak jauh.",
            "Singa suka tidur, bahkan hingga 20 jam sehari. Wah, mereka benar-benar raja yang santai, ya!",
            "Auman singa bisa terdengar hingga 8 kilometer jauhnya. Itu cara mereka menunjukkan siapa penguasanya.",
            "Singa sering menjaga keluarganya dengan baik, terutama anak-anaknya yang disebut anak singa atau cub.",
            "Di banyak cerita, singa menjadi simbol keberanian dan kekuatan.",
        ],
        soundURL: '/lion.mp3',
    },
    {
        id: 2,
        name: "Tiger",
        facts: [
            "Harimau adalah pemangsa puncak di hutan. Mereka berburu sendirian dan sangat ahli dalam mengendap-endap.",
            "Bulu harimau yang loreng membantunya bersembunyi di antara pepohonan. Lorengnya unik, tidak ada harimau dengan pola yang sama!",
            "Harimau tinggal di hutan tropis yang lebat. Mereka suka berenang di sungai untuk mendinginkan tubuh.",
            "Harimau adalah kucing besar yang sangat suka air. Mereka pandai berenang dan sering berburu di dekat air.",
            "Taring harimau sangat kuat, digunakan untuk menangkap mangsa dengan cepat.",
            "Harimau sering berburu di malam hari. Mata mereka bisa melihat dalam gelap dengan sangat baik.",
            "Berbeda dengan singa, harimau hidup sendiri dan sangat menjaga wilayahnya.",
            "Saat berburu, harimau berjalan sangat pelan dan senyap. Mangsa bahkan tidak sadar sampai harimau sudah dekat.",
            "Harimau bisa menahan napasnya saat mendekati mangsa agar tidak ketahuan.",
            "Harimau sering menjadi simbol keberanian di berbagai budaya Asia.",
        ],
        soundURL: '/tiger.mp3',
    },
    {
        id: 3,
        name: "Monkey",
        facts: [
            "Monyet dikenal sangat cerdas. Mereka bisa menggunakan alat sederhana untuk mencari makanan.",
            "Monyet tinggal di pohon-pohon tinggi. Mereka melompat dari satu pohon ke pohon lain dengan lincah.",
            "Monyet suka makan buah-buahan seperti pisang, tetapi mereka juga makan serangga dan daun.",
            "Monyet hidup dalam kelompok besar. Mereka saling membantu dan bermain bersama.",
            "Kelompok monyet sering terdengar berisik karena mereka suka berbicara satu sama lain dengan suara yang unik.",
            "Monyet bisa meniru gerakan manusia. Itulah mengapa mereka sering terlihat lucu.",
            "Banyak monyet memiliki ekor panjang yang digunakan untuk menjaga keseimbangan saat melompat.",
            "Monyet suka bermain. Mereka sering terlihat bergelantungan di cabang pohon seperti sedang main ayunan.",
            "Monyet sering membersihkan bulu temannya. Ini cara mereka menunjukkan kasih sayang.",
            "Monyet dikenal ramah dengan manusia, terutama jika manusia memberi mereka makanan!",
        ],
        soundURL: '/monkey.mp3',
    },
    {
        id: 6,
        name: "Elephant",
        facts: [
            "Tahukah kamu, gajah itu hewan darat terbesar di dunia? Beratnya bisa sampai 6.000 kilogram, lho! Itu berat sekali, kan?",
            "Gajah punya otak yang besar, dan mereka sangat pintar. Mereka bisa mengingat banyak hal, bahkan teman-temannya. Kalau bertemu lagi setelah bertahun-tahun, mereka masih ingat!",
            "Ibu gajah harus menunggu 22 bulan untuk melahirkan anaknya. Wah, itu hampir dua tahun, lebih lama dari manusia!",
            "Lihat gajah yang punya gading panjang? Itu sebenarnya gigi mereka yang tumbuh ke luar! Gading itu dipakai untuk menggali tanah atau melindungi diri.",
            "Gajah bisa \"berbicara\" dengan suara keras seperti terompet. Tapi yang hebat, mereka juga bisa membuat suara pelan yang hanya bisa didengar gajah lain meski dari jauh.",
            "Gajah suka mandi dan bermain air. Mereka juga jago berenang, lho! Kalau menyelam, belalai mereka digunakan sebagai snorkel.",
            "Gajah suka hidup berkelompok bersama keluarganya. Kelompok ini dipimpin oleh ibu gajah yang paling tua dan bijaksana.",
            "Gajah suka makan daun, rumput, dan buah-buahan. Mereka bisa makan sampai 150 kilogram sehari! Itu seperti makan 1.000 pisang setiap hari!",
            "Gajah itu sangat emosional, lho. Mereka bisa merasa bahagia, sedih, bahkan menangis kalau ada temannya yang pergi selamanya.",
            "Telinga gajah itu besar sekali, seperti kipas angin. Ternyata, telinga itu membantu mereka merasa sejuk saat cuaca panas."
        ],
        soundURL: '/elephant.mp3',
    },
    {
        id: 4,
        name: "Parrot",
        facts: [
            "Burung beo memiliki bulu yang indah dan warna-warni. Mereka terlihat sangat cantik!",
            "Burung beo bisa meniru suara manusia. Mereka belajar dengan cepat dan suka bermain.",
            "Burung beo suka makan buah, biji-bijian, dan kacang. Mereka juga membantu menyebarkan biji tanaman.",
            "Burung beo tinggal di pohon-pohon tinggi di hutan tropis.",
            "Paruh burung beo sangat kuat, digunakan untuk memecahkan biji yang keras.",
            "Burung beo sering terlihat berpasangan, mereka setia dengan pasangannya seumur hidup.",
            "Burung beo bisa hidup hingga 50 tahun atau lebih!",
            "Burung beo sangat pintar dan suka bermain. Mereka juga cepat belajar trik.",
            "Burung beo memiliki suara yang keras, mereka suka memanggil temannya dengan berteriak.",
            "Burung beo dikenal ramah dengan manusia, apalagi jika diberi makanan yang mereka suka."
        ],
        soundURL: '/parrot.mp3',
    },
    {
        id: 5,
        name: "Giraffe",
        facts: [
            "Jerapah punya leher yang panjang sekali! Leher itu membantunya memakan daun dari pohon yang tinggi.",
            "Jerapah tinggal di savana yang luas. Mereka suka berjalan-jalan mencari makanan.",
            "Kulit jerapah punya pola bintik-bintik yang unik. Tidak ada dua jerapah yang sama!",
            "Lidah jerapah panjang dan kuat, hingga 50 cm. Lidah ini membantunya memetik daun.",
            "Meskipun tinggi, jerapah berjalan dengan sangat anggun.",
            "Saat minum, jerapah harus membungkuk dengan cara yang lucu karena lehernya terlalu panjang.",
            "Jerapah hanya butuh tidur beberapa jam sehari. Mereka sering tidur sambil berdiri.",
            "Telinga jerapah sangat tajam, mereka bisa mendengar suara dari jauh.",
            "Jerapah berbicara dengan suara yang sangat rendah, bahkan manusia tidak bisa mendengarnya.",
            "Jerapah suka hidup berkelompok, dan mereka saling menjaga satu sama lain."
        ],
        soundURL: '/elephant.mp3',
    },
    {
        id: 7,
        name: "Cat",
        facts: [
            "Kucing punya kumis yang sangat sensitif, membantu mereka merasakan lingkungan sekitar.",
            "Kucing bisa melompat hingga 6 kali panjang tubuhnya! Mereka atlet yang hebat.",
            "Saat kucing mendengkur, itu bisa membantu menyembuhkan tulang dan otot mereka.",
            "Kucing punya penglihatan malam yang sangat bagus, 6 kali lebih baik dari manusia.",
            "Kucing menggunakan ekornya untuk menjaga keseimbangan saat berjalan dan berlari.",
            "Kucing suka tidur hingga 16 jam sehari. Mereka benar-benar suka santai!",
            "Kucing berkomunikasi dengan manusia menggunakan suara 'meong' khusus.",
            "Kucing sangat bersih, mereka menghabiskan 30% waktu mereka untuk membersihkan diri.",
            "Hidung kucing unik seperti sidik jari manusia, tidak ada yang sama.",
            "Kucing bisa berlari dengan kecepatan hingga 30 kilometer per jam.",
        ],
        soundURL: '/cat.mp3',
    },
    {
        id: 8,
        name: "Dog",
        facts: [
            "Anjing bisa memahami lebih dari 150 kata yang diajarkan oleh manusia.",
            "Hidung anjing sangat sensitif, 40 kali lebih kuat dari hidung manusia.",
            "Anjing menggunakan ekornya untuk berkomunikasi dengan anjing lain dan manusia.",
            "Anjing adalah hewan pertama yang dikirim ke luar angkasa dalam sebuah pesawat ruang angkasa!",
            "Telinga anjing bisa menangkap suara dari jarak yang sangat jauh.",
            "Anjing suka bermain dan belajar hal-hal baru sepanjang hidupnya.",
            "Anjing sangat setia dan akan melindungi keluarganya.",
            "Anjing bisa mencium perasaan manusia dari bau tubuh kita.",
            "Setiap anjing punya sidik jari hidung yang unik, seperti sidik jari manusia.",
            "Anjing adalah sahabat terbaik manusia sejak ribuan tahun yang lalu.",
        ],
        soundURL: '/dog.mp3',
    },
    {
        id: 9,
        name: "Duck",
        facts: [
            "Bebek punya selaput di kakinya yang membantu mereka berenang dengan cepat.",
            "Bulu bebek dilapisi minyak alami yang membuat mereka tetap kering saat berenang.",
            "Bebek bisa tidur dengan setengah otak mereka, sementara setengah lainnya tetap terjaga.",
            "Bebek kecil atau anak bebek bisa berenang sejak hari pertama menetas.",
            "Suara 'kwek' bebek tidak menimbulkan gema, dan ilmuwan masih mempelajari mengapa.",
            "Bebek sangat suka makan rumput dan tanaman air.",
            "Bebek punya penglihatan yang sangat bagus dan bisa melihat warna.",
            "Bebek sering terbang dalam formasi V untuk menghemat energi.",
            "Bebek bisa menyelam hingga kedalaman 6 meter untuk mencari makanan.",
            "Bebek adalah hewan yang sangat sosial dan suka hidup berkelompok.",
        ],
        soundURL: '/duck.mp3',
    }
];

const getRandomizedImageUploader = () => {
    const shuffled = [...imageUploader].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
};

const AnimalImage = ({ animal, isDropAreaVisible }) => {
    const [{ isDragging }, drag, preview] = useDrag(() => ({
        type: 'animal',
        item: { ...animal },
        canDrag: isDropAreaVisible,
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }), [isDropAreaVisible]);

    return (
        <div ref={drag} className="p-2 shrink-0">
            <img
                src={animal.src}
                alt={animal.alt}
                className={`w-32 h-32 object-cover cursor-pointer rounded-lg shadow-lg transition-transform duration-300 ${isDragging ? 'opacity-50 scale-95' : ''}`}
            />
        </div>
    );
};

const CustomDragLayer = () => {
    const { itemType, isDragging, item, currentOffset } = useDragLayer((monitor) => ({
        itemType: monitor.getItemType(),
        isDragging: monitor.isDragging(),
        item: monitor.getItem(),
        currentOffset: monitor.getSourceClientOffset(),
    }));

    if (!isDragging || !currentOffset) {
        return null;
    }

    const { x, y } = currentOffset;

    return (
        <div
            style={{
                position: 'fixed',
                pointerEvents: 'none',
                left: 0,
                top: 0,
                transform: `translate(${x}px, ${y}px)`,
                zIndex: 100,
            }}
        >
            <img
                src={item.src}
                alt={item.name}
                className="w-32 h-32 object-cover rounded-lg shadow-lg"
            />
        </div>
    );
};

const AnimalList = ({ listRef, correctAnimals, isAnimalListVisible }) => {
    const correctAnimalIds = correctAnimals.map(animal => animal.id);
    
    const incorrectAnimals = animalImages.filter(animal => !correctAnimalIds.includes(animal.id));
    const correctAnimalsData = animalImages.filter(animal => correctAnimalIds.includes(animal.id));
    
    // For each correct animal, get 2 random incorrect ones
    const getRandomAnimalsForCard = (correctAnimal) => {
        const shuffledIncorrect = [...incorrectAnimals]
            .filter(animal => animal.id !== correctAnimal.id)
            .sort(() => 0.5 - Math.random())
            .slice(0, 2);

        return shuffledIncorrect.concat(correctAnimalsData);
    };

    return (
        <div ref={listRef} className="flex gap-4 overflow-x-hidden w-full px-12">
            {getRandomAnimalsForCard(correctAnimalsData).map((animal) => (
                <AnimalImage key={animal.id} animal={animal} isDropAreaVisible={isAnimalListVisible} />
            ))}
        </div>
    );
};

const AnimalFacts = ({ IsMenuOpen }) => {
    const [droppedImages, setDroppedImages] = useState({});
    const [randomizedImageUploader, setRandomizedImageUploader] = useState(getRandomizedImageUploader());
    const listRef = useRef(null);
    const [isFirstVisible, setIsFirstVisible] = useState(true);
    const [isLastVisible, setIsLastVisible] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [isAnimalListVisible, setIsAnimalListVisible] = useState(false);
    const observerRef = useRef(null);
    const dropAreaRefs = useRef(new Map());

    const handlePlaySound = (soundURL) => {
        const audio = new Audio(soundURL);
        audio.play().catch(error => {
            toast.error('Error playing the audio stream. Please try again later.');
        });
    };

    const checkDevice = () => {
        if (window.innerWidth > 768) {
            setShowModal(true);
        } else {
            setShowModal(false);
        }
    };

    const slideList = (direction) => {
        const list = listRef.current;
        if (!list) return;

        const scrollAmount = 200;
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
        checkDevice();

        const list = listRef.current;
        if (!list) return;

        list.addEventListener('scroll', updateButtonState);
        updateButtonState();

        return () => {
            list.removeEventListener('scroll', updateButtonState);
        };
    }, []);

    useEffect(() => {
        // Disconnect any existing observer
        if (observerRef.current) {
            observerRef.current.disconnect();
        }

        // Create a new IntersectionObserver
        observerRef.current = new IntersectionObserver(
            (entries) => {
                const firstVisibleEntry = entries.find(entry => entry.intersectionRatio > 0.8);
                if (firstVisibleEntry) {
                    setIsAnimalListVisible(true);
                } else {
                    setIsAnimalListVisible(false);
                }
            },
            {
                root: null, // Use the viewport as the root
                threshold: [0, 0.8], // Check at 0%, 50%, and 100% visibility
            }
        );

        dropAreaRefs.current.forEach((ref) => {
            if (ref) {
                observerRef.current.observe(ref);
            }
        });

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [dropAreaRefs.current, isAnimalListVisible]); // Re-initialize when dropAreaRefs change

    useEffect(() => {
        if (!IsMenuOpen) {
            setIsAnimalListVisible(true);
        }
    }, [IsMenuOpen]);

    const Card = ({ animal, cardId }) => {
        const [{ isOver }, drop] = useDrop(() => ({
            accept: 'animal',
            drop: (item) => {
                setDroppedImages((prevState) => ({
                    ...prevState,
                    [cardId]: {
                        ...item,
                        isCorrect: item.id === animal.id,
                    },
                }));
            },
            collect: (monitor) => ({
                isOver: monitor.isOver(),
            }),
        }));

        const setDropAreaRef = useCallback((node) => {
            if (node !== null) {
                dropAreaRefs.current.set(cardId, node);
            }
        }, [cardId]);

        return (
            <div
                ref={drop}
                className={`w-5/6 max-w-lg p-8 bg-white border-4 flex flex-col items-center mb-4 rounded-xl shadow-lg ${isOver ? 'border-green-300' : 'border-white-200'}`}
            >
                <div className="mb-4">
                    <ul>
                        {animal.facts.map((fact, index) => (
                            <li key={index} className="mb-2 text-gray-700">{fact}</li>
                        ))}
                    </ul>
                </div>

                <button
                    onClick={() => handlePlaySound(animal.soundURL)}
                    className="bg-blue-500 text-white py-2 px-4 rounded-xl shadow-md hover:bg-blue-400"
                >
                    Putar suara hewan
                </button>

                <div
                    ref={setDropAreaRef}
                    className={`w-80 h-80 bg-gray-100 flex items-center justify-center mt-4 ${isOver ? 'border-green-400' : 'border-blue-300'}`}
                >
                    {droppedImages[cardId]?.id === animal.id || droppedImages[cardId]?.id ? (
                        <div id="animal-drop-area" className="text-center">
                            <img
                                src={droppedImages[cardId]?.src}
                                alt={droppedImages[cardId]?.name}
                                className="w-full h-full"
                            />
                        </div>
                    ) : (
                        <p className="text-gray-500">Geser foto hewan kesini</p>
                    )}
                </div>
                {droppedImages[cardId]?.id === animal.id ? (
                    <p className="mt-4 text-green-500">Jawaban kamu benar!</p>
                ) : droppedImages[cardId]?.id ? (
                    <p className="mt-4 text-red-500">Jawaban kamu salah!</p>
                ) : <p></p>}
            </div>
        );
    };

    return (
        <div style={{
            backgroundImage: 'url("/background.webp")',
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto',
        }} className={`flex flex-col items-center min-h-screen bg-blue-50`}>
            <div className='p-8 place-self-start'>
                <h2 className="text-2xl font-bold mb-4">Fakta Hewan</h2>
                <p className="text-gray-700">
                    Ayo temukan gambar hewan sesuai faktanya!
                </p>
            </div>
            <ToastContainer />
            <CustomDragLayer />

            {/* Animal Placeholder */}
            <div
                id="book-content"
                className="flex flex-col items-center w-full"
                style={{ paddingBottom: '160px' }} // Adjusted bottom padding for the floating section height
            >
                {randomizedImageUploader.map((animal) => (
                    <Card key={animal.id} animal={animal} cardId={animal.id} />
                ))}
                {/* Footer Section */}
                <footer className="w-full bg-gray-800 text-white text-center py-4 mt-8 p-4">
                    <p className='text-sm'>
                        Semua audio diambil dari <a href="https://pixabay.com" className="underline">Pixabay</a> dan gambar hewan dihasilkan oleh AI.
                    </p>
                    <p className='text-sm'>Web dibuat oleh <a href="https://ridho.work" className="underline">Ridho Perdana</a></p>
                </footer>
            </div>

            <div
                id="animal-choosen-list"
                className={`fixed bottom-0 left-0 right-0 bg-gray-800 shadow p-4 flex items-center z-10 rounded-t-xl transition-opacity duration-500 ${isAnimalListVisible ? 'opacity-100' : 'opacity-0'}`}
            >
                <button
                    className={`py-2 px-4 rounded-full absolute left-4 text-white shadow-md transition-colors ${
                        isFirstVisible ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
                    }`}
                    onClick={() => !isFirstVisible && slideList('left')}
                    disabled={isFirstVisible}
                >
                    ◀
                </button>

                <AnimalList listRef={listRef} correctAnimals={randomizedImageUploader} isAnimalListVisible={isAnimalListVisible} />

                <button
                    className={`py-2 px-4 rounded-full absolute right-4 text-white shadow-md transition-colors ${
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

export default AnimalFacts; 