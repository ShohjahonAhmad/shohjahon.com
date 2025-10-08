import { NavLink } from "react-router-dom";


const Header = () => {

    const activeStyles = {
        color: "#7B4AE2",
        opacity: "50%",
    }


    return (
        <header className="flex items-center bg-purple-700/5 justify-between px-[23px] py-[11px] rounded-2xl">
            <i class="fa-solid fa-code text-white/50 text-4xl"></i>
            <div className="text-white/50 flex gap-5">
                <NavLink 
                    to="/"
                    end
                    style={({isActive}) => isActive ? activeStyles : null}>
                    Home
                </NavLink>
                <NavLink 
                    to="/about"
                    style={({isActive}) => isActive ? activeStyles : null}>
                    About
                </NavLink>
            </div>
        </header>
    )
}

export default Header;