import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const Layout = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen px-[23px] xl:px-[140px] py-[38px]">
            <Header />
            <main className="flex-1 flex flex-col">
                <Outlet />
            </main>
        </div>
            <Footer />
        </>
        )
}

export default Layout