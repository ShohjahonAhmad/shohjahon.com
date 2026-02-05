import {Link, useSearchParams, Await, useRouteLoaderData } from "react-router-dom";
import React from "react";
import capitalize from "../utils/capitalize";
import LoadingSpinner from "../utils/LoadingSpinner";

const stacks = [["Front-End", "frontend"], ["Full Stack", "fullstack"], ["Backend", "backend"]]

const Portfolio = () => {
    const {portfolio} = useRouteLoaderData("root");
    const [searchParams] = useSearchParams({filter: "fullstack"});
    const filter = searchParams.get("filter")
    
    function genereteSearchParam(key, value){
        const url = new URLSearchParams(searchParams)

        if(value === null){
            url.delete(key)
        }else {
            url.set(key, value)
        }
        

        return "?" + url.toString()
    }

    return (
        <React.Suspense fallback = {<LoadingSpinner/>}>
                <Await resolve = {portfolio}>

                {(projects) => {
                    const projectss = projects?.projects ?? [];           
                    const displayedProjects = filter === null || filter === "fullstack" ? projectss : projectss.filter(project => project.category === filter.toUpperCase()) 
                    const portEl = displayedProjects.map(project => {
                        return (
                                <div className="basis-[24%] flex flex-col border border-violet-700/50 rounded-xl p-[30px] w-full h-[460px] hover:border-violet-700/10 hover:bg-violet-700/10 transition-colors duration-200" key={project.id}>
                                    <a href={project.gitHub} target="_blank" rel="noopener noreferrer">
                                    <h1 className="text-xl text-white font-bold truncate">{project.title}</h1>
                                    <div className="h-[100px] mt-2 mb-4">
                                        <p className="text-white/50 overflow-hidden">{project.description}</p>
                                    </div>
                                    <div className="flex gap-2 mb-[22px]">
                                        {project.tags.map(tag => {
                                            return <div key = {tag.name} className="rounded-xl px-2 py-1 text-violet-700 bg-violet-700/10">
                                                        {capitalize(tag.name)}
                                                </div>
                                        })}
                                    </div>
                                    </a>
                                    <video    
                                        src={project.videoUrl}
                                        className="rounded-xl w-full  h-[200px] cover-object"
                                        poster={project.imageUrl} controls muted> </video>
                                </div>
                            )
                    })
                    return (
                        
                        <main className="flex flex-col py-[45px] px-4 mt-16 lg:mt-0">
                            <h2 className="w-fit bg-violet-700/5 text-[20px] px-4 py-2 rounded-2xl text-violet-700">🔗 Portfolio</h2>
                            <div className="flex flex-col lg:flex-row md:justify-between mt-6">
                                <h1 className="font-extrabold text-5xl text-white">Projects</h1>
                                <div className="flex gap-8 mt-8 lg:mt-0">
                                    {stacks.map(stack => {
                                        return (
                                            <Link 
                                                className={`border w-[184px] text-violet-700/50 rounded-xl text-center py-[11px]  
                                                            ${filter === stack[1] ? "bg-violet-700/10 border-violet-700/10" : ""}`}
                                                to = {genereteSearchParam("filter", stack[1])} 
                                                key={stack[1]}>
                                                {stack[0]}
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-full mt-[100px]">
                                {portEl}
                            </div>
                            
                        </main>
                    )
                }}

                </Await>
        </React.Suspense>
    )
}

export default Portfolio