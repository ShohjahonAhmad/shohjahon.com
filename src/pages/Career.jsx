import { useLoaderData } from "react-router-dom";
import {calculatePeriod, stringifyDate} from '../utils/dateCalculator'

const baseUrl = import.meta.env.VITE_BASE_URL

export async function loader() {
    try{
        const res = await fetch(`${baseUrl}/career`);

        if(!res) {
            throw {
                message: "Failed to fetch career data",
                code: 500,
                statusText: "Internal Server Error"
            }
        }

        const data = await res.json();
        return data;
    } catch(err) {
        throw {
            message: err.message || "Something went wrong",
            code: err.code || 500,
            statusText: err.statusText || "Internal Server Error"
        }
    }
}

const Career = (props) => {
    const loaderData = useLoaderData()
    const academicCareer = loaderData.academicCareer || props.data.academicCareer;
    const professionalCareer = loaderData.professionalCareer || props.data.professionalCareer;
    const professionalElements = professionalCareer.map(career => {
        const start = new Date(career.start_date);
        const end = new Date(career.end_date);
        return  (<div className="rounded-2xl p-[30px] border border-violet-700/50 w-[580px] h-[220px] hover:border-violet-700/10 hover:bg-violet-700/10 transition-colors duration-200" key={career.id}>
                    <h1 className="font-bold text-xl text-white">{career.title}</h1>
                    <p className="mt-2 text-white/50 h-[78px] mb-[16px]">{career.description}</p>
                    <div className="flex justify-between">
                        <span className="text-violet-700">{calculatePeriod(start, end)}</span>
                        <span className="text-violet-700">{stringifyDate(start, end)}{career.isCurrent && "*"}</span>
                    </div>
                </div>)
    })

    const academicElements = academicCareer.map(career => {
        const start = new Date(career.start_date);
        const end = new Date(career.end_date);
        return  (<div className="rounded-2xl p-[30px] border border-violet-700/50 w-[580px] h-[220px] hover:border-violet-700/10 hover:bg-violet-700/10 transition-colors duration-200" key={career.id}>
                    <h1 className="font-bold text-xl text-white">{career.title}</h1>
                    <p className="mt-2 text-white/50 h-[78px] mb-[16px]">{career.description}</p>
                    <div className="flex justify-between">
                        <span className="text-violet-700">{calculatePeriod(start, end)}</span>
                        <span className="text-violet-700">{stringifyDate(start, end)}{career.isCurrent && "*"}</span>
                    </div>
                </div>)
    })
    return (
        <main className="flex flex-col items-center py-16">
            <h2 className="w-fit bg-violet-700/5 text-[20px] px-4 py-2 rounded-2xl text-violet-700">💼 Career</h2>
            <h1 className="font-extrabold text-5xl text-white mt-6 ">Journey so far</h1>
            <div className="flex w-full my-16">
                <div className="flex-1 flex flex-col items-center">
                    <h1 className="text-[32px] text-white font-extrabold text-center">Professional Area</h1>
                    <h2 className="text-2xl text-white/50 text-center mb-[65px]">2025 - now</h2>
                    {professionalElements}
                </div>
                <div className="flex-1 flex flex-col items-center">
                    <h1 className="text-[32px] text-white font-extrabold text-center">Academic</h1>
                    <h2 className="text-2xl text-white/50 text-center mb-[65px]">2021 - now</h2>
                    {academicElements}
                </div>
            </div>
        </main>
    )
}

export default Career;