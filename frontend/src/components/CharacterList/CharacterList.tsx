import {Card} from "@/components/ui/card.tsx";
import useCharacter from "@/state/characterStore.ts";

const CharacterList = () => {
    const {data} = useCharacter()

    return (
        <>
            <section className={'grid grid-cols-2 p-2 gap-2 pb-12'}>
                {data?.data.map(character => {
                    const {id, name, description, img} = character
                    return (
                        <Card key={id}
                              className={`group cursor-pointer w-full relative aspect-[4/6] overflow-hidden`}>
                            <div className="transition-transform duration-300 transform group-hover:scale-105">
                                <img src={img} alt={name} className="object-cover w-full h-full"/>
                            </div>
                            <div
                                className={'absolute bottom-0 h-1/4 w-full bg-background/50 backdrop-blur-sm px-2 py-1.5 flex flex-col justify-center'}>
                                <h1 className={'font-bold'}>{name}</h1>
                                <p className={'text-xs line-clamp-2'}>{description}</p>
                            </div>
                        </Card>
                    )
                })}
            </section>
        </>
    )
}

export default CharacterList