import Layout from '@/components/Layout/Layout';
import React from 'react';

const About = () => {
  return (
    <Layout>

      <div className="flex dark:bg-black dark:text-white flex-col justify-center items-center  min-h-screen bg-gray-100">
        <h1 className="text-4xl md:text-6xl font-bold dark:text-white  text-gray-800 mb-4">Coming Soon</h1>
        <p className="text-gray-600 text-center dark:text-white  px-4 md:px-8">We're working on something awesome. Stay tuned!</p>
      </div>
    </Layout>
  );
};

export default About;
