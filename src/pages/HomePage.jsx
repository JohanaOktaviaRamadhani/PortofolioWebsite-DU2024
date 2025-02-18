import React from "react"; 
import Jumbotron from "../components/Jumbotron";
import MyProjects from '../components/myproject';
import Contacts from "../components/Contact";
import Layout from "../layouts/Layout";

const AboutMe = () => (
  <section className="container mx-auto py-16 px-6 md:px-12 text-center bg-white">
    <h2 className="text-4xl font-bold mb-6 text-rose-900">About Me</h2>
    <p className="text-lg md:w-3/4 mx-auto text-gray-700">
      Hi! I’m Hana, a passionate Computer Engineering student with a deep love for technology and innovation. 
      I thrive on creating projects that blend creativity with functionality, always seeking to push the boundaries of what’s possible. 
      Through this website, I’m excited to share some of the work I’ve done, showcasing my journey in the world of tech. 
      Let’s connect, collaborate, and build something amazing together!
    </p>
  </section>
);

const Projects = () => (
  <section className="container mx-auto py-16 px-6 md:px-12 text-center bg-white">
    <h2 className="text-4xl font-bold mb-6 text-rose-900">Projects</h2>
    <MyProjects />
  </section>
);

const HomePage = () => (
  <Layout>
    <Jumbotron />
    <AboutMe />
    <Projects />
    <Contacts />
  </Layout>
);

export default HomePage;
