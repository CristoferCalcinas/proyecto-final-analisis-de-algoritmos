import { create } from 'zustand';

interface State {
    is_admin: boolean;
    name: string;

    setName: (p_name: string) => void;
    setIsAdmin: (p_is_admin: boolean) => void;
}

export const useDashboardStore = create<State>()((set) => ({
    is_admin: false,
    name: '',

    setName: (p_name) => set({ name: p_name }),
    setIsAdmin: (p_is_admin) => set({ is_admin: p_is_admin }),
}));