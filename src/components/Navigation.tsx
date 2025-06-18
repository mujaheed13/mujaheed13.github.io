import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface NavigationProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isDark, onThemeToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  const navItems = [
    "home",
    "about",
    "skills",
    "experience",
    "projects",
    "contact",
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-xl z-50 border-b border-border/50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
            &lt;Mohammad Mujaheed/&gt;
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="relative text-foreground/70 hover:text-foreground transition-all duration-300 capitalize group"
              >
                {section}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
            ))}
            <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-foreground/70 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-3 py-2 text-foreground/70 hover:text-foreground hover:bg-accent/50 rounded-md transition-all duration-200 capitalize"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
