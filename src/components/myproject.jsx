import React from 'react';

const MyProjects = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Project Card 1 */}
      <div
        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <img
          src="images/Project1.png"
          alt="Project 1"
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h3 className="text-xl font-semibold text-rose-800 mb-4">Daily Website</h3>
        <p className="text-gray-700 mb-4">
          Website ini saya buat sebagai tugas mata kuliah Pemrograman Basis Web. 
          Proyek ini menggabungkan HTML, CSS, dan JS untuk tampilan, PHP untuk pemrograman sisi server, serta Laragon untuk pengelolaan database dan server lokal. 
          SQL digunakan untuk mengelola data dalam backend.
        </p>
        <button className="px-4 py-2 bg-rose-800 text-white rounded-lg hover:bg-rose-700">
          View Details
        </button>
      </div>

      {/* Project Card 2 */}
      <div
        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <img
          src="images/Project2.jpg"
          alt="Project 2"
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h3 className="text-xl font-semibold text-rose-800 mb-4">StoryRoom</h3>
        <p className="text-gray-700 mb-4">
          Proyek ini dibuat untuk menangani tindak kekerasan fisik, mental, dan seksual, sebagai bagian dari 
          Digital Innovation Challenge: Perempuan Inovasi yang diselenggarakan oleh Markoding, dengan tujuan memberikan solusi digital yang dapat mendukung perlindungan dan pemberdayaan perempuan.         
        </p>
        <button className="px-4 py-2 bg-rose-800 text-white rounded-lg hover:bg-rose-700">
          View Details
        </button>
      </div>

      {/* Project Card 3 */}
      <div
        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <img
          src="images/Project3.png"
          alt="Project 3"
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h3 className="text-xl font-semibold text-rose-800 mb-4">Website Bootcamp DU</h3>
        <p className="text-gray-700 mb-4">
          Website ini dibuat untuk memenuhi tugas mingguan dalam bootcamp DOSCOM University. 
          Di sini saya belajar mengembangkan aplikasi web menggunakan JSX untuk antarmuka dan CSS Tailwind untuk desain responsif dan modern. 
          Proses ini membantu saya mengasah keterampilan pengembangan web secara praktis.
        </p>
        <button className="px-4 py-2 bg-rose-800 text-white rounded-lg hover:bg-rose-700">
          View Details
        </button>
      </div>
    </div>
  );
};

export default MyProjects;
