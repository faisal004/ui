import { create } from 'zustand';


interface ColorState {
    from: string | null;
    via: string | null;
    to: string | null;
}

interface ColorStore {
    colors: ColorState;
    setColors: (newColors: Partial<ColorState>) => void;
    position: string;
    setPosition: (newPosition: string) => void;
}
const useCustomBgStore = create<ColorStore>((set) => ({
    colors: {
        from: null,
        via: null,
        to: null,
    },
    position:"top left",
    setPosition: (newPosition) => set({ position: newPosition }),
    setColors: (newColors) =>
        set((state) => ({ colors: { ...state.colors, ...newColors } })),
}));

export default useCustomBgStore;
