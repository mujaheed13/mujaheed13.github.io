
import React from 'react';
import { Code, Zap, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }}></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          {/* Floating code symbols */}
          <div className="relative">
            <div className="absolute -top-16 -left-16 animate-bounce delay-300">
              <Code className="w-8 h-8 text-blue-500/70" />
            </div>
            <div className="absolute -top-12 -right-20 animate-bounce delay-700">
              <Terminal className="w-6 h-6 text-purple-500/70" />
            </div>
            <div className="absolute -bottom-8 left-8 animate-bounce delay-1000">
              <Zap className="w-7 h-7 text-green-500/70" />
            </div>
          </div>

          {/* Profile image with enhanced styling */}
          <div className="relative inline-block group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg group-hover:blur-xl transition-all duration-500 animate-pulse"></div>
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop&crop=face"
              alt="Developer Profile"
              className="relative w-40 h-40 rounded-full border-4 border-background shadow-2xl group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-500"></div>
          </div>

          {/* Main heading with typewriter effect */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
              <span className="inline-block animate-fade-in">Full Stack</span>
              <br />
              <span className="inline-block animate-fade-in delay-300">Developer</span>
            </h1>
            <div className="flex items-center justify-center space-x-2 text-xl md:text-2xl text-muted-foreground">
              <span className="animate-fadeInLeft delay-500">&lt;</span>
              <span className="animate-fadeInUp delay-700 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                Building Digital Experiences
              </span>
              <span className="animate-fadeInRight delay-500">/&gt;</span>
            </div>
          </div>

          {/* Enhanced description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fadeInUp delay-1000">
            Passionate developer with <span className="text-blue-600 font-semibold">2 years</span> of experience crafting 
            <span className="text-purple-600 font-semibold"> scalable web solutions</span> using cutting-edge technologies.
          </p>

          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp delay-1200">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center space-x-2">
                <span>View My Work</span>
                <Code className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <span className="relative">Get In Touch</span>
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
