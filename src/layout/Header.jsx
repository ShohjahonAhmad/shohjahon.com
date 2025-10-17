import { useState } from "react"
import { NavLink } from "react-router-dom"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const activeStyles = {
    color: "#7B4AE2",
    // opacity: "50%"
  }

  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "about" },
    { name: "Portfolio", to: "portfolio" },
    { name: "Skills", to: "skills" },
    { name: "Career", to: "career" },
    { name: "Contacts", to: "contacts" },
  ]

  return (
    <header className="flex sticky top-0 z-50 backdrop-blur-md items-center bg-purple-700/5 justify-between px-4 py-3 lg:px-[23px] lg:py-[11px] rounded-2xl">
      <i className="fa-solid fa-code text-white/50 text-4xl"></i>

      <nav className="hidden lg:flex text-white/50 gap-5">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.to}
            end={link.to === "/"}
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            {link.name}
          </NavLink>
        ))}
      </nav>

      <button
        className="lg:hidden text-white/50 text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-zinc-900/30 backdrop-blur-lg flex flex-col items-center py-4 gap-4 lg:hidden z-50">
            {links.map((link) => (
            <NavLink
                key={link.name}
                to={link.to}
                end={link.to === "/"}
                style={({ isActive }) =>
                isActive ? activeStyles : { color: "#fff", opacity: "50%" }
                }
                onClick={() => setMenuOpen(false)}
                className="text-white text-lg"
            >
                {link.name}
            </NavLink>
            ))}
        </div>
        )}
    </header>
  )
}

export default Header