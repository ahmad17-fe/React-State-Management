import create from "zustand";

const ProfileStore = create((set) => ({
  isOpen: false,
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default ProfileStore;
