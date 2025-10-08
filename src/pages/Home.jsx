import avatar from "../assets/avatar1.png"
import resume from "../assets/resume.pdf"
import dotenv from 'dotenv';
dotenv.config()

const Home = () => {
    return (
        <main className="flex justify-between flex-1 items-center">
            <div className="flex flex-1 flex-col gap-6">
                <h2 className="w-fit bg-purple-700/5 text-[20px] px-4 py-2 rounded-2xl text-violet-700">👋 Hey!</h2>
                <h1 className="text-5xl text-white font-extrabold">Shohjahon <br /> Ahmedov</h1>
                <pre className="text-white/50 text-xl">Full-Stack Developer · Student</pre>
                <span className="flex gap-4">
                    <a 
                        href = "https://www.linkedin.com/in/shohjahon-ahmedov-a5a834346/"
                        target='_blank'
                        rel="noopener noreferrer">
                        <i class="fa-brands fa-linkedin text-3xl text-white/50"></i>
                    </a>
                    <a 
                        href = "https://github.com/ShohjahonAhmad"
                        target='_blank'
                        rel="noopener noreferrer">
                        <i class="fa-brands fa-github text-3xl text-white/50"></i>
                    </a>
                </span>
            </div>
            <img 
                src={avatar} 
                alt="avatar"
                className="h-[600px] flex-1" />
            <div className="flex flex-1 flex-col items-end gap-2 text-violet-700">
                <a href={resume} download className="text-base">
                    Download CV <i class="fa-solid fa-download"></i>
                </a>
                <a href={`https://wa.me/${process.env.NUMBER}?text=Hello%20Shohjahon!`} className="border-violet-700 border rounded-2xl px-4 py-2.5">
                <i class="fa-brands fa-whatsapp"></i> Let's Talk
                </a>
            </div>
        </main>
    )
}

export default Home