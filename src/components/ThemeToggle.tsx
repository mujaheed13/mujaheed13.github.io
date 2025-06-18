
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={onToggle}
      className="relative overflow-hidden group"
    >
      <div className={`transform transition-all duration-500 ${isDark ? 'rotate-180 scale-0' : 'rotate-0 scale-100'}`}>
        <Sun className="h-5 w-5" />
      </div>
      <div className={`absolute transform transition-all duration-500 ${isDark ? 'rotate-0 scale-100' : '-rotate-180 scale-0'}`}>
        <Moon className="h-5 w-5" />
      </div>
    </Button>
  );
};

export default ThemeToggle;
