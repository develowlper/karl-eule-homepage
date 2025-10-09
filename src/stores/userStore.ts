import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type UserState = {
  theme: string;
  setTheme: (theme: string) => void;
};

export const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        theme: 'dark',
        setTheme: (newTheme) => set((state) => ({ ...state, theme: newTheme })),
      }),
      {
        name: 'user-storage', // unique name for the storage
      }
    ),
    { name: 'user-store' }
  )
);
