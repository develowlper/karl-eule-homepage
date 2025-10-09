'use client';

import { useUserStore } from '@/stores/userStore';
import { useEffect } from 'react';

const themes = [
  'light',
  'dark',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
  'dim',
  'nord',
  'sunset',
  'caramellatte',
  'abyss',
  'silk',
];

export default function ThemeDropdown() {
  const theme = useUserStore((state) => state.theme);
  const setTheme = useUserStore((state) => state.setTheme);

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newTheme = event.target.value;

    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <select className="select" onChange={handleThemeChange} value={theme}>
      {themes.map((themeOption) => (
        <option
          disabled={themeOption === theme}
          key={themeOption}
          value={themeOption}
        >
          {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
        </option>
      ))}
    </select>
  );
}
