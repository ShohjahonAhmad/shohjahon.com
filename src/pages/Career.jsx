import { useRouteLoaderData, Await } from "react-router-dom";
import React from "react";
import {calculatePeriod, stringifyDate} from '../utils/dateCalculator'
import LoadingSpinner from "../utils/LoadingSpinner";

const Career = () => {
    const { careerData } = useRouteLoaderData("root");
    
    return (
            <React.Suspense fallback = {<LoadingSpinner/>}>
                <Await resolve = {careerData}>
                    
                    {(loaderData) => {
                        const academicCareer = loaderData?.academicCareer ?? [];
                        const professionalCareer = loaderData?.professionalCareer ?? [];
                        const professionalElements = professionalCareer.map(career => {
                            const start = new Date(career.start_date);
                            const end = new Date(career.end_date);
                            return  (<div className="rounded-2xl p-[30px] border border-violet-700/50 w-full h-[200px] xl:w-[580px] xl:h-[220px] hover:border-violet-700/10 hover:bg-violet-700/10 transition-colors duration-200" key={career.id}>
                                        <h1 className="font-bold xl:text-xl text-base text-white truncate">{career.title}</h1>
                                        <p className="mt-2 text-[14px] xl:text-base text-white/50 h-[78px] mb-[16px] overflow-hidden">{career.description}</p>
                                        <div className="flex justify-between text-[12px] xl:text-base">
                                            <span className="text-violet-700">{calculatePeriod(start, end)}</span>
                                            <span className="text-violet-700">{stringifyDate(start, end)}{career.isCurrent && "*"}</span>
                                        </div>
                                    </div>)
                        })
                    
                        const academicElements = academicCareer.map(career => {
                            const start = new Date(career.start_date);
                            const end = new Date(career.end_date);
                            return  (<div className="rounded-2xl p-[30px] border border-violet-700/50 w-full h-[200px] xl:w-[580px] xl:h-[220px] hover:border-violet-700/10 hover:bg-violet-700/10 transition-colors duration-200" key={career.id}>
                                        <h1 className="font-bold xl:text-xl text-base text-white truncate">{career.title}</h1>
                                        <p className="mt-2 text-[14px] xl:text-base text-white/50 h-[78px] mb-[16px] overflow-hidden">{career.description}</p>
                                        <div className="flex justify-between text-[12px] xl:text-base">
                                            <span className="text-violet-700">{calculatePeriod(start, end)}</span>
                                            <span className="text-violet-700">{stringifyDate(start, end)}{career.isCurrent && "*"}</span>
                                        </div>
                                    </div>)
                        })
                        return (
                             <main className="flex flex-col items-start xl:items-center py-16 px-4">
                                <h2 className="w-fit bg-violet-700/5 text-[20px] px-4 py-2 rounded-2xl text-violet-700">💼 Career</h2>
                                <h1 className="font-extrabold text-5xl text-white mt-6 ">Journey so far</h1>
                                <div className="flex flex-col xl:flex-row w-full my-16">
                                    <div className="flex-1 flex flex-col items-start xl:items-center">
                                        <h1 className="text-[32px] text-white font-extrabold text-center">Professional Area</h1>
                                        <h2 className="text-2xl text-white/50 text-center mb-[65px]">2025 - now</h2>
                                        {professionalElements}
                                    </div>
                                    <div className="flex-1 flex flex-col mt-4 xl:mt-0 items-start xl:items-center">
                                        <h1 className="text-[32px] text-white font-extrabold text-center">Academic</h1>
                                        <h2 className="text-2xl text-white/50 text-center mb-[65px]">2024 - now</h2>
                                        {academicElements}
                                    </div>
                                </div>
                            </main>
                        )
                    }}
                </Await>
            </React.Suspense>
        
    )
}

export default Career;