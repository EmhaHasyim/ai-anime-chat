import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"
import sortSelectionStore, {Sort} from "@/state/sortSelectionStore.ts";
import genderSelectionStore, {Gender} from "@/state/genderSelectionStore.ts";

const CharacterListHeader = () => {

    const {selectedGenders, setSelectedGenders} = genderSelectionStore()

    const {selectedSort, setSelectedSort} = sortSelectionStore()

    return (
        <>
            <div className={'flex items-center justify-center py-1 px-2 gap-2 bg-neutral-900'}>
                <input type="search" placeholder={'Search'}
                       className={'w-full rounded-md border border-input bg-background p-1.5 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-neutral-500 disabled:cursor-not-allowed disabled:opacity-50'}/>
                <ToggleGroup type="multiple" value={selectedGenders} onValueChange={setSelectedGenders}>
                    <ToggleGroupItem value={Gender.Male} aria-label="Toggle Male"
                                     className={'p-1.5 text-muted-foreground'}>
                        Male
                    </ToggleGroupItem>
                    <ToggleGroupItem value={Gender.Female} aria-label="Toggle Female"
                                     className={'p-1.5 text-muted-foreground'}>
                        Female
                    </ToggleGroupItem>
                </ToggleGroup>
                <ToggleGroup type="single" value={selectedSort} onValueChange={setSelectedSort}>
                    <ToggleGroupItem value={Sort.Popular} aria-label="Toggle Male"
                                     className={'p-1.5 text-muted-foreground'}>
                        Popular
                    </ToggleGroupItem>
                    <ToggleGroupItem value={Sort.latest} aria-label="Toggle Female"
                                     className={'p-1.5 text-muted-foreground'}>
                        New
                    </ToggleGroupItem>
                </ToggleGroup>
            </div>

        </>
    )
}

export default CharacterListHeader