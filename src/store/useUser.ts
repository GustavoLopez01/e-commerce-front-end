import { create } from "zustand";
import type { User } from "../types/user";

type State = {
  user: User | null
}

type Action = {
  updateUser: (user: User) => void
}

export const useUserStore = create<State & Action>((set) => ({
  user: null,
  updateUser: (user) => set(() => ({ user })),
}));