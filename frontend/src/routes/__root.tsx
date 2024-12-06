import {createRootRoute, createRoute, Outlet} from '@tanstack/react-router'
import Header from "@/components/Header/Header.tsx";
import Footer from '@/components/Footer/Footer.tsx'
import Home from "@/page/Home.tsx";


const rootRoute = createRootRoute({
    component: () => (
        <>
            <Header/>
            <main className={'flex-1'}>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
})

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: Home
})

export const routeTree = rootRoute.addChildren([indexRoute])