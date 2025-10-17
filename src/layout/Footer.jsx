import LeetCodeIcon from "../utils/LeetCodeIcon"

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-violet-700/10 py-8 px-6 md:px-[140px] gap-4 md:gap-0 md:flex-row md:justify-between">
      {/* Icons */}
      <div className="flex gap-6">
        <a
          href="https://www.linkedin.com/in/shohjahon-ahmedov-a5a834346/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin text-3xl text-white/50 hover:text-white transition" />
        </a>
        <a
          href="https://github.com/ShohjahonAhmad"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github text-3xl text-white/50 hover:text-white transition" />
        </a>
        <a
          href="https://leetcode.com/u/PEACEFUL7777/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LeetCodeIcon />
        </a>
      </div>

      <span className="text-white/50 text-center md:text-left">
        Copyright © Shohjahon Ahmedov · {new Date().getFullYear()}
      </span>
    </footer>
  )
}

export default Footer