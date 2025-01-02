
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Layout from '../layouts/Layout';
import MyProjects from '../components/myproject';

const ProjectPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        <section id="projects" className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-rose-800 mb-8" data-aos="fade-up">
              Beberapa project saya
            </h2>
            <MyProjects />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ProjectPage;
