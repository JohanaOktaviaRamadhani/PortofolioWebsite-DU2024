import { useParams } from "react-router";
import Layout from "../layouts/Layout";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-white text-gray-800 py-8 px-6">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          data-aos="fade-up"
        >
          <h1 className="text-4xl font-bold text-rose-900 mt-4">Tentang Saya</h1>
          <p className="text-xl text-gray-600 mt-2">Selamat datang di halaman pribadi saya!</p>
        </motion.div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 px-4">
          {/* Profile Image */}
          <motion.div
            className="flex justify-center"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 50 }}
            data-aos="zoom-in"
          >
            <img
              src="images/johana.jpg"
              alt="Profile"
              className="w-48 h-48 rounded-full object-cover shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          {/* About Text */}
          <motion.div
            className="max-w-full lg:max-w-4xl text-center lg:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            data-aos="fade-left"
          >
            <h2 className="text-3xl font-semibold text-rose-900">Halo, saya Hana</h2>
            <p className="text-lg text-gray-700 mt-4">
              Saya adalah mahasiswa Teknik Informatika di Universitas Dian Nuswantoro. Sejak kecil, saya sudah memiliki ketertarikan yang mendalam terhadap dunia teknologi. Saat ini, saya fokus mendalami pengembangan perangkat lunak serta manajemen bisnis. Saya sangat tertarik untuk mempelajari cara mengelola perusahaan teknologi dan mengembangkan produk yang bermanfaat bagi banyak orang.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Selain itu, saya juga aktif di berbagai organisasi. Saya bergabung dengan Himpunan Pengusaha Muda Indonesia (HIPMI) dan Dinus Open Source Community (DOSCOM), yang memberikan saya banyak kesempatan untuk mengembangkan keterampilan di bidang manajemen, kepemimpinan, dan komunikasi. Di HIPMI, saya terlibat dalam proyek pengembangan bisnis dan mendukung organisasi dalam menjalin kemitraan dengan berbagai perusahaan. Sementara itu, di DOSCOM, saya mengasah keterampilan di bidang front-end development.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Ke depan, saya memiliki ambisi untuk berkarir di industri teknologi, tidak hanya sebagai teknisi atau programmer, tetapi juga di posisi manajerial yang lebih luas. Saya berharap dapat memperoleh pengalaman internasional dan suatu saat nanti mendirikan startup teknologi yang memberikan dampak positif bagi masyarakat. Saya juga berkomitmen untuk terus belajar dan berkembang dalam bidang ini serta membangun jaringan yang dapat membantu saya mencapai tujuan karir saya.
            </p>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
