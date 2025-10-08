import { Outlet } from "react-router-dom"
import Header from "./Header"

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen px-[140px] py-[38px]">
            <Header />
            <main className="flex-1 flex ">
                <Outlet />
            </main>
        </div>
        )
}

export default Layout