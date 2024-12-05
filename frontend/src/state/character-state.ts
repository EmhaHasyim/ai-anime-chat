import {useQuery} from "@tanstack/react-query";
import api from "@/lib/api.ts";


const useCharacter = () => {
    return useQuery({
        queryKey: ['characters'],
        queryFn: async () => {
            const res = await api.character.$get({query: {}})
            return await res.json()
        }
    })
}

export default useCharacter