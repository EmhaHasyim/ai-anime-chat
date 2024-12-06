import NavigationBarFooter from "@/components/Footer/navigation/NavigationBarFooter.tsx";

const Footer = () => {

    return (
        <>
            <footer className={'flex justify-evenly items-center h-11 bg-neutral-900 w-full fixed bottom-0 left-0'}>
                <NavigationBarFooter/>
            </footer>
        </>
    )
}

export default Footer