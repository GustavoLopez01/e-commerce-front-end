import { create } from "zustand";
import type { UserBody } from "../types/user";

type State = {
  user: UserBody | null
  showSidebar: boolean
}

type Action = {
  updateUser: (user: UserBody) => void
  setShowSidebar: (showSidebar: boolean) => void
}

export const useUserStore = create<State & Action>((set) => ({
  user: null,
  showSidebar: false,
  updateUser: (user) => set(() => ({ user })),
  setShowSidebar: (showSidebar) => set(() => ({ showSidebar }))
}));