import NavigationBarFooter from "@/components/Footer/navigation/NavigationBarFooter.tsx";

const Footer = () => {
    return (
        <>
            <footer className={'flex justify-evenly items-center h-14 bg-neutral-900 w-full'}>
                <NavigationBarFooter/>
            </footer>
        </>
    )
}

export default Footer