import VectorIcon from "../utils/VectorIcon"
import CopySmileIcon from "../utils/CopySmileIcon"
import ArrowUpIcon from "../utils/ArrowUpIcon"
import { useState } from "react";
const phoneNumber = import.meta.env.VITE_NUMBER;
const email = import.meta.env.VITE_EMAIL;

const Contacts = (prop) => {
    const [copied, setCopied] = useState(false)

    function copyEmail () {
        navigator.clipboard.writeText(email)
        setCopied(true)
        setTimeout(() => setCopied(false), 500)
    }

    return (
        <main className="flex flex-col items-start px-4 md:items-center my-16">
            <h2 className="w-fit bg-violet-700/5 text-[20px] px-4 py-2 rounded-2xl text-violet-700">
                📬 Contacts
            </h2>
            <h1 className="font-extrabold text-5xl text-white mt-6 mb-8 md:mb-16">
                Let's talk
            </h1>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                    <a 
                        href={`https://wa.me/${phoneNumber}?text=Hello%20Shohjahon!`} 
                        className="border-violet-700 border text-xl rounded-2xl font-semibold text-violet-700 px-4 py-2.5"
                        target="_blank">
                    <i className="fa-brands fa-whatsapp text-xl"></i> Let's Chat
                    </a>
                    <div className="flex flex-col items-start md:items-center gap-1">
                        <VectorIcon/>
                        <h3 className="text-violet-700/50 text-xl">E-mail:</h3>
                        <h3 className="text-white/50 text-xl mb-3">ahmshohjahon@gmail.com</h3>
                        <span onClick={copyEmail} className="active:scale-90">
                            <CopySmileIcon/>
                        </span>
                        <span className="text-violet-700 min-h-[20px] text-sm">
                                {copied && "Copied!"}
                        </span>
                    </div>
            </div>
            {   prop.home === true &&
                <div className="flex mt-16 gap-2 active:scale-90 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}>
                <h1 className="text-xl text-violet-700/50">Back to Top</h1>
                <ArrowUpIcon/>
            </div>
            }
        </main>
    )
}
export default Contacts;