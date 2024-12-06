import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

const NavigationBarHeader = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Avatar className={'scale-90'}>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </li>
                </ul>
            </nav>
        </>
    )
}
export default NavigationBarHeader