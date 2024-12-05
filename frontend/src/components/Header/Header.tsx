import NavigationBarHeader from "@/components/Header/navigation/NavigationBarHeader.tsx";
import {Link} from "@tanstack/react-router";

const Header = () => {

    return (
        <>
            <header className={'flex justify-between items-center h-12 w-full px-5 py-2 bg-neutral-800'}>
                <Link to={'/'} className={'font-bold text-xl'}>
                    Anime Chat
                </Link>
                <NavigationBarHeader/>
            </header>
        </>
    )
}

export default Header
