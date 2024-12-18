// src/AnimalStory.jsx
import React from 'react';

const stories = [
    {
        id: 1,
        animalName: "Singa",
        stories: [
            'Di tengah hutan yang lebat, hiduplah seekor singa bernama Raja. Raja sangat kuat, tapi hatinya baik. Suatu hari, ia melihat kelinci kecil yang tersesat di tepi sungai. "Jangan takut, aku akan membantumu pulang," kata Raja dengan suara lembut. Sang kelinci merasa senang dan melompat ke punggung Raja. Dengan langkah hati-hati, Raja membawa kelinci melewati hutan hingga sampai ke rumahnya.',
            'Setelah itu, kelinci bercerita kepada teman-temannya tentang kebaikan Raja. "Singa itu tidak menakutkan, dia sangat baik!" ujar kelinci. Kabar tentang kebaikan Raja menyebar ke seluruh hutan. Semua hewan datang untuk berterima kasih kepadanya. Mereka memberikan buah-buahan segar dan bunga sebagai tanda cinta mereka kepada Raja.',
            'Sejak hari itu, Raja tidak hanya menjadi singa yang kuat tetapi juga pemimpin yang disayangi. Setiap kali ada hewan yang kesulitan, Raja selalu siap membantu. Dia tahu bahwa kekuatan bukan hanya untuk berkuasa tetapi juga untuk melindungi dan membantu teman-temannya.',
            'Hewan-hewan di hutan hidup rukun dan bahagia karena memiliki Raja yang pemurah. Mereka percaya bahwa kebaikan bisa membuat dunia lebih indah.'
        ]
    },
    {
        id: 2,
        animalName: "Harimau",
        stories: [
            'Di sebuah hutan besar, hiduplah seekor harimau bernama Belang. Belang terkenal kuat dan pemberani. Suatu hari, Belang berjalan di tepi sungai untuk mencari minum. Saat ia mendekat, Belang melihat bayangan harimau besar di dalam air. "Siapa itu?" tanya Belang dengan suara menggeram. Bayangan itu terlihat marah seperti Belang.',
            'Belang merasa tertantang. "Aku tidak akan kalah darimu!" katanya sambil menerkam air dengan keras. Tapi apa yang terjadi? Cipratan air membasahi seluruh tubuhnya, dan Belang tercebur ke sungai. Ia berusaha berenang ke tepian sambil terbatuk-batuk karena kemasukan air.',
            'Setelah berhasil naik, Belang duduk di tepi sungai sambil tertawa kecil. "Oh, ternyata itu hanya bayangan diriku sendiri!" katanya. Harimau besar yang ia lihat hanyalah pantulan dirinya di permukaan air. Belang merasa lucu sekaligus malu.',
            'Sejak hari itu, Belang tidak lagi sombong. Ia sadar bahwa dirinya memang kuat, tetapi tidak perlu menantang apa pun tanpa berpikir panjang. Teman-temannya di hutan pun memuji Belang karena sudah menjadi harimau yang lebih bijaksana.',
            'Belang belajar sesuatu yang penting: kadang, musuh terbesar adalah rasa sombong dalam diri kita sendiri.'
        ]
    },
    {
        id: 3,
        animalName: "Monyet",
        stories: [
            'Di sebuah pohon besar di tengah hutan, hiduplah monyet kecil bernama Ciko. Ciko sangat ceria dan selalu melompat-lompat mencari makanan. Suatu hari, Ciko menemukan pohon pisang yang penuh dengan buah matang. "Wah, pisang ini pasti enak sekali!" serunya dengan mata berbinar.',
            'Ciko pun memanjat pohon dan mulai memetik pisang. Setelah mengumpulkan banyak pisang, ia duduk di dahan sambil memikirkan sesuatu. "Kalau aku makan semua ini sendirian, pasti aku kenyang. Tapi, bukankah akan lebih menyenangkan jika aku berbagi?" pikir Ciko.',
            'Tanpa ragu, Ciko memanggil teman-temannya: kelinci, tupai, dan burung. "Ayo, teman-teman! Mari kita makan pisang bersama-sama!" seru Ciko. Teman-temannya datang dengan senang hati. Mereka makan pisang sambil tertawa dan bercerita bersama.',
            'Setelah selesai, semua teman Ciko berterima kasih. "Kamu baik sekali, Ciko! Berbagi memang menyenangkan," kata kelinci. Ciko tersenyum bahagia. Ia merasa lebih senang karena bisa berbagi kebahagiaan bersama teman-temannya.',
            'Hari itu, Ciko belajar bahwa kebahagiaan akan terasa lebih besar jika dibagi dengan orang lain. Sejak itu, ia selalu mengajak teman-temannya setiap kali menemukan makanan.'
        ]
    },
    {
        id: 4,
        animalName: "Burung Beo",
        stories: [
            'Di sebuah desa kecil, ada burung beo bernama Beni. Beni tinggal di rumah Pak Tono dan dikenal karena kepintarannya menirukan suara manusia. Setiap hari, Beni mendengar suara-suara yang ada di rumah dan mengingatnya dengan baik.',
            'Suatu pagi, Pak Tono sibuk mencari kunci yang hilang. "Di mana kunci? Kunciku hilang!" kata Pak Tono sambil mencari di setiap sudut rumah. Beni, yang mendengar itu, langsung berkata, "Di bawah meja! Di bawah meja!"',
            'Pak Tono kaget mendengar suara Beni. "Apa? Di bawah meja?" tanyanya sambil melirik ke bawah meja. Benar saja, kunci yang hilang ada di sana! Pak Tono tertawa senang sambil mengambil kunci tersebut. "Terima kasih, Beni! Kamu memang burung yang pintar."',
            'Sejak hari itu, Beni menjadi burung kesayangan Pak Tono. Setiap tamu yang datang ke rumah, Pak Tono selalu bercerita tentang kepintaran Beni. "Lihat burung beo saya ini. Dia bisa menolong saya menemukan kunci!" katanya bangga.',
            'Beni pun senang bisa membantu tuannya. Ia belajar bahwa kepintarannya bisa berguna untuk orang lain.'
        ]
    },
    {
        id: 5,
        animalName: "Jerapah",
        stories: [
            'Di padang rumput yang luas, hiduplah seekor jerapah tinggi bernama Lala. Dengan lehernya yang panjang, Lala bisa mencapai daun-daun di pohon tertinggi. Teman-temannya yang lebih kecil sering kesulitan mendapatkan makanan.',
            'Suatu hari, kelinci datang kepada Lala. "Lala, tolong ambilkan buah itu untukku. Aku tidak bisa mencapainya," kata kelinci sambil menunjuk ke arah buah di dahan tinggi. Lala tersenyum ramah. "Tentu, aku akan membantumu!" jawab Lala.',
            'Dengan mudah, Lala menjulurkan lehernya yang panjang dan memetik buah itu. Ia memberikan buah kepada kelinci dengan hati senang. Tidak lama kemudian, tupai dan burung juga meminta tolong. Lala membantu mereka satu per satu dengan sabar.',
            '"Terima kasih, Lala! Kamu memang baik sekali," kata tupai. Lala merasa bahagia bisa membantu teman-temannya. Ia sadar bahwa tinggi badannya adalah kelebihan yang bisa digunakan untuk menolong yang lain.',
            'Sejak hari itu, Lala dikenal sebagai jerapah yang baik hati. Teman-temannya selalu datang padanya jika butuh bantuan. Semua hewan di padang rumput hidup rukun dan saling membantu, berkat kebaikan Lala.'
        ]
    }
]

const AnimalStory = () => {
    return (
        <div
            style={{
                backgroundImage: 'url("/background.webp")',
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

            {stories.map((story) => (
                <div className="w-full" key={story.id}>
                    <div className="bg-green-50 rounded-xl ml-8">
                        <h1 className="text-2xl font-bold pt-4 pl-6">{story.animalName}</h1>
                        <div className="mb-4 flex flex-row overflow-x-auto w-screen place-self-center no-scrollbar">
                            {story.stories.map((value, index) => (
                                <div key={value}
                                     className='min-w-80 m-4 p-8 bg-white border-4 mb-4 rounded-xl shadow-lg place-self-center'>
                                    <p key={index}>{value}</p>
                                    <p className="place-self-end text-gray-400">{index+1}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))};

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
