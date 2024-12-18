import React from 'react';

const Marketplace = () => {
    // Sample toy data
    const toys = [
        { id: 1, name: 'Boneka Kucing', price: 'Rp. 50.000', rating: 4.8, image: '/cat-item.webp' },
        { id: 2, name: 'Boneka Gajah', price: 'Rp. 50.000', rating: 4.9, image: '/elephant-item.webp' },
        { id: 3, name: 'Boneka Jerapah', price: 'Rp. 50.000', rating: 4.7, image: '/giraffe-item.webp' },
        { id: 4, name: 'Boneka Kuda', price: 'Rp. 50.000', rating: 5.0, image: '/horse-item.webp' },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {/* Header */}
            <header className="p-4 bg-white shadow-md flex justify-between items-center">
                <h3 className="text-2xl font-bold">Toko</h3>
                <div className="relative">
                    <button className="text-gray-600">
                        🛒 <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs">3</span>
                    </button>
                </div>
            </header>

            {/* Search Section */}
            <div className="p-4">
                <input
                    type="text"
                    placeholder="Cari mainan hewan ..."
                    className="w-full p-2 border rounded-md"
                />
            </div>

            {/* Categories */}
            <div className="px-4 mb-2">
                <h2 className="text-lg font-semibold mb-2">Jenis Hewan</h2>
                <div className="flex space-x-2 overflow-x-auto">
                    <button className="bg-green-600 text-white px-4 py-1 rounded-lg">All</button>
                    <button className="border px-4 py-1 rounded-lg">Mamalia</button>
                    <button className="border px-4 py-1 rounded-lg">Hidup di Darat</button>
                    <button className="border px-4 py-1 rounded-lg">Hidup di Air</button>
                </div>
            </div>

            {/* Clearance Section */}
            <div className="bg-green-100 p-4 mx-4 rounded-lg flex items-center mb-4">
                <div>
                    <h3 className="text-lg font-bold">Diskon Pembukaan!</h3>
                    <p className="text-green-600">Kupon Diskon hingga 50%!</p>
                </div>
                <img src="/gajah-item-empty.webp" alt="Sale" className="ml-auto w-20 h-20 object-contain" />
            </div>

            {/* Toy Listings */}
            <div className="flex-grow grid grid-cols-2 gap-4 p-4">
                {toys.map((toy) => (
                    <div key={toy.id} className="bg-white p-4 rounded-lg shadow-md">
                        <img
                            src={toy.image}
                            alt={toy.name}
                            className="w-full h-32 object-contain mb-2"
                        />
                        <h3 className="font-semibold text-gray-700">{toy.name}</h3>
                        <p className="text-green-600 font-bold">{toy.price}</p>
                        <div className="flex items-center">
                            <span className="text-yellow-500">⭐</span>
                            <span className="ml-1 text-gray-600">{toy.rating}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 text-white text-center py-4">
                <p className="text-sm">
                    Semua produk dibuat dari material berkualitas dan aman untuk anak - anak.
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

export default Marketplace;
