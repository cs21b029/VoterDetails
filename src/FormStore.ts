import { create } from "zustand"
import { FormData } from "./types"
interface FormStore {
    formData: FormData | null;
    setFormData: (data: FormData) => void;
}

export const useFormStore = create<FormStore>((set) => ({
    formData: null,
    setFormData: (data) => set({ formData: data}),
}));