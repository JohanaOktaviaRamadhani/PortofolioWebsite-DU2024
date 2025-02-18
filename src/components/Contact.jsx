import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
            <div className="p-8 font-sans bg-gray-50">
                <h2 className="text-center text-3xl font-bold mb-8 text-rose-900" data-aos="fade-up">Contact Information</h2>

                <div className="flex flex-col items-center justify-center gap-8">
                    <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg border-l-4 border-rose-900" data-aos="fade-right">
                        <h3 className="text-xl font-semibold text-gray-800">Address</h3>
                        <p className="text-gray-600">Gg. Abu Bakar IV no 52, Desa Tambak Aji</p>
                        <p className="text-gray-600">Ngaliyan, Kota Semarang</p>
                    </div>

                    <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg border-l-4 border-rose-900" data-aos="fade-left">
                        <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
                        <p className="text-gray-600">+62 8966123-5659</p>
                    </div>

                    <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg border-l-4 border-rose-900" data-aos="fade-right">
                        <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                        <p className="text-gray-600">
                            <a href="mailto:Hanaoktavia82281@gmail.com" className="text-gray-600 hover:underline">Hanaoktavia82281@gmail.com</a>
                        </p>
                    </div>

                    <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg border-l-4 border-rose-900" data-aos="fade-left">
                        <h3 className="text-xl font-semibold text-gray-800">Follow Us</h3>
                        <p className="text-gray-600">
                            <a href="https://www.instagram.com/jhnaoktv_?igsh=ZmprcGJ2OHJmZTA4" className="text-rose-700 hover:underline" target="_blank" rel="noopener noreferrer">Instagram</a> | 
                            <a href="https://www.linkedin.com/in/johanaoktavia?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-rose-700 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </p>
                    </div>
                </div>
            </div>
    );
};

export default Contact;
