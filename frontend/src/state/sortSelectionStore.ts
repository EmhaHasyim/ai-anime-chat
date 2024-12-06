import {create} from "zustand";

export enum Sort {
    Popular = "popular",
    latest = "latest"
}

interface SortSelectionSort {
    selectedSort: Sort,
    setSelectedSort: (sort: Sort) => void;
}

const sortSelectionStore = create<SortSelectionSort>((set) => ({
    selectedSort: Sort.Popular,
    setSelectedSort: (sort) => set({selectedSort: sort})
}))

export default sortSelectionStore