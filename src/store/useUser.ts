import { create } from "zustand";
import type { User } from "../types/user";

type State = {
  user: User | null
  showSidebar: boolean
}

type Action = {
  updateUser: (user: User) => void
  setShowSidebar: (showSidebar: boolean) => void
}

export const useUserStore = create<State & Action>((set) => ({
  user: null,
  showSidebar: false,
  updateUser: (user) => set(() => ({ user })),
  setShowSidebar: (showSidebar) => set(() => ({ showSidebar }))
}));