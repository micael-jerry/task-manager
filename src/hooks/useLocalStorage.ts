import { create } from "zustand";

interface LocalStorageState {
  addItem: (item: string) => void;
  getAllItems: () => string[];
};

const useLocalStorage = create<LocalStorageState>((set) => ({
  addItem: (item) => {
    localStorage.setItem(Date.now().toString(), item);
  },
  getAllItems: () => {
    const items = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        const item = localStorage.getItem(key);
        if (item) {
          items.push(item);
        }
      }
    }
    return items;
  }
}));

export {
  useLocalStorage
}