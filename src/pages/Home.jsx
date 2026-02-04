import avatar from "../assets/avatar1.png"
import LeetCodeIcon from "../utils/LeetCodeIcon";
import NoName from "../components/NoName";
import { Suspense } from "react";
import { useLoaderData, Await, defer } from "react-router-dom";
import About from "./About";
import Career from "./Career";
import Contacts from "./Contacts";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import { getCareer, getLeetCode, getPortfolio } from "../utils/apiCalls/api";
import LoadingSpinner from "../utils/LoadingSpinner";

const phoneNumber = import.meta.env.VITE_NUMBER;
const baseUrl = import.meta.env.VITE_BASE_URL;
const resumeUrl = import.meta.env.VITE_RESUME_URL;

export async function loader() {
    try {
      const careerData = getCareer();
      const solved = getLeetCode();
      const portfolio = getPortfolio();
  
      return defer({careerData, solved, portfolio});
    } catch (err) {
        throw {
            message: err.message || "Something went wrong",
            code: err.code || 500,
            statusText: err.statusText || "Internal Server Error"
        }
    }
  }

const Home = () => {
    const {careerData, solved, portfolio} = useLoaderData();
    console.log(resumeUrl);
    return (
        <Suspense fallback={<LoadingSpinner/>}>
            <Await resolve = {Promise.all([careerData, solved, portfolio])}>
                {([careerData, solved, portfolio]) => {
                    return (
                        <>
                            <main className="flex flex-col lg:flex-row flex-1 justify-between items-center min-h-[calc(100vh-58px)] gap-4 lg:gap-0 px-4 lg:px-0">
                                <div className="flex flex-1 flex-col gap-6 mt-4 lg:mt-0">
                                    <h2 className="w-fit bg-purple-700/5 text-[20px] px-4 py-2 rounded-2xl text-violet-700">👋 Hey!</h2>
                                    <h1 className="text-5xl text-white font-extrabold">Shohjahon <br /> Ahmedov</h1>
                                    <pre className="text-white/50 text-xl">Full-Stack Developer · Student</pre>
                                    <span className="flex gap-4">
                                        <a 
                                            href = "https://www.linkedin.com/in/shohjahon-ahmedov-a5a834346/"
                                            target='_blank'
                                            rel="noopener noreferrer">
                                            <i className="fa-brands fa-linkedin text-3xl text-white/50 hover:text-white transition"></i>
                                        </a>
                                        <a 
                                            href = "https://github.com/ShohjahonAhmad"
                                            target='_blank'
                                            rel="noopener noreferrer">
                                            <i className="fa-brands fa-github text-3xl text-white/50 hover:text-white "></i>
                                        </a>
                                        <a 
                                            href = "https://leetcode.com/u/PEACEFUL7777/"
                                            target = "_blank"
                                            rel="noopener noreferrer">
                                            <LeetCodeIcon />
                                        </a>
                                    </span>
                                </div>
                                <img 
                                    src={avatar} 
                                    alt="avatar"
                                    className="h-[600px] flex-1" />
                                <div className="flex flex-1 flex-col items-end gap-2 text-violet-700">
                                    <a href={resumeUrl} download className="text-base">
                                        Download CV <i className="fa-solid fa-download"></i>
                                    </a>
                                    <a 
                                        href={`https://wa.me/${phoneNumber}?text=Hello%20Shohjahon!`} 
                                        className="border-violet-700 border rounded-2xl px-4 py-2.5"
                                        target="_blank">
                                    <i className="fa-brands fa-whatsapp"></i> Let's Chat
                                    </a>
                                </div>
                            </main>
                            <NoName solved = {solved}/>
                            <section className="h-screen flex items-center">
                                <About />
                            </section>
                            <section>
                                <Portfolio portfolio = {portfolio}/>
                            </section>
                            <section>
                                <Skills/>
                            </section>
                            <section >
                                <Career data = {careerData}/>
                            </section>
                            <section >
                                <Contacts home={true} />
                            </section>
                        </>
                    )
                }}
            </Await>
        </Suspense>
    )
}

export default Home