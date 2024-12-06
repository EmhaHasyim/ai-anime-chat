import {create} from "zustand";

export enum Gender {
    Male = "male",
    Female = "female"
}

interface GenderSelectionStore {
    selectedGenders: Gender[],
    setSelectedGenders: (genders: Gender[]) => void
}

const genderSelectionStore = create<GenderSelectionStore>((set) => ({
    selectedGenders: [],
    setSelectedGenders: (genders) => set({selectedGenders: genders})
}));

export default genderSelectionStore;
