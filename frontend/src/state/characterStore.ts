import {useQuery} from "@tanstack/react-query";
import api from "@/lib/api.ts";
import genderSelectionStore, {Gender} from "@/state/genderSelectionStore.ts";
import sortSelectionStore from "@/state/sortSelectionStore.ts";

const useCharacter = () => {

    const {selectedGenders} = genderSelectionStore()

    const {selectedSort} = sortSelectionStore()

    const genderQuery = selectedGenders.length === 0 ||
    (selectedGenders.includes(Gender.Male) && selectedGenders.includes(Gender.Female))
        ? undefined
        : selectedGenders[0];

    return useQuery({
        queryKey: ['characters', selectedGenders, selectedSort],
        queryFn: async () => {
            const res = await api.character.$get({
                query: {
                    gender: genderQuery,
                    sort: selectedSort ? selectedSort : undefined

                }
            })
            return res.json()
        }
    })
}

export default useCharacter