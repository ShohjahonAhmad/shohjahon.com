import LeetCodeIcon from "../utils/LeetCodeIcon"

const Footer = () => {
    return (
        <footer className="flex justify-between bg-violet-700/10 py-8 px-[140px]">
            <span className="text-white/50">
                Copyright © Shohjahon Ahmedov · {new Date().getFullYear()}
            </span>
            <span className="absolute left-1/2 -translate-x-1/2 flex gap-4">
                        <a 
                            href = "https://www.linkedin.com/in/shohjahon-ahmedov-a5a834346/"
                            target='_blank'
                            rel="noopener noreferrer">
                            <i className="fa-brands fa-linkedin text-3xl text-white/50"></i>
                        </a>
                        <a 
                            href = "https://github.com/ShohjahonAhmad"
                            target='_blank'
                            rel="noopener noreferrer">
                            <i className="fa-brands fa-github text-3xl text-white/50"></i>
                        </a>
                        <a 
                            href = "https://leetcode.com/u/PEACEFUL7777/"
                            target = "_blank"
                            rel="noopener noreferrer"
                        >
                            <LeetCodeIcon />
                        </a>
                    </span>
        </footer>
    )
}
export default Footer