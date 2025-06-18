
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
              alt="Developer workspace"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Hello! I'm a passionate Full Stack Developer
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              With 2 years of experience in web development, I specialize in creating
              robust, scalable applications that provide exceptional user experiences.
              I'm passionate about clean code, modern development practices, and
              continuous learning.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              My journey in web development has equipped me with expertise in both
              frontend and backend technologies. I enjoy tackling complex problems
              and turning ideas into reality through code.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Frontend Focus</h4>
                <p className="text-gray-600 text-sm">React, Next.js, TypeScript</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Backend Expertise</h4>
                <p className="text-gray-600 text-sm">Node.js, Nest.js, Express</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
