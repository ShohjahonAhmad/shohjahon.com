import { useLoaderData, Link, useSearchParams } from "react-router-dom";
import capitalize from "../utils/capitalize";


const baseUrl = import.meta.env.VITE_BASE_URL;
const stacks = [["Front-End", "frontend"], ["Full Stack", "fullstack"], ["Backend", "backend"]]


export async function loader () {
    try{
        const res = await fetch(`${baseUrl}/projects`);

        if(!res) {
            throw {
                message: "Failed to fetch porfolio data",
                code: 500,
                statusText: "Internal Server Error"
            }
        }

        const data = await res.json();
        return data
    } catch(err){
        throw {
            message: err.message || "Something went wrong",
            code: err.code || 500,
            statusText: err.statusText || "Internal Server Error"
        }
    }
}

const Portfolio = (prop) => {
    const loaderData = useLoaderData();
    const projects = loaderData.projects || prop.portfolio.projects
    const [searchParams, setSearchParams] = useSearchParams({filter: "fullstack"});

    const filter = searchParams.get("filter")
    console.log(projects)

    const displayedProjects = filter === null || filter === "fullstack" ? projects : projects.filter(project => project.category === filter.toUpperCase()) 
    function genereteSearchParam(key, value){
        const url = new URLSearchParams(searchParams)

        if(value === null){
            url.delete(key)
        }else {
            url.set(key, value)
        }
        

        return "?" + url.toString()
    }

    const portEl = displayedProjects.map(project => {
        return (
                <div className="flex flex-col border border-violet-700/50 rounded-xl p-[30px] w-[360px] h-[460px] hover:border-violet-700/10 hover:bg-violet-700/10 transition-colors duration-200" key={project.id}>
                    <a href={project.gitHub} target="_blank" rel="noopener noreferrer">
                    <h1 className="text-xl text-white font-bold truncate">{project.title}</h1>
                    <div className="h-[100px] mt-2 mb-4">
                        <p className="text-white/50 overflow-hidden">{project.description}</p>
                    </div>
                    <div className="flex gap-2 mb-[22px]">
                        {project.tags.map(tag => {
                            return <div key = {tag.id} className="rounded-xl px-2 py-1 text-violet-700 bg-violet-700/10">
                                        {capitalize(tag.name)}
                                   </div>
                        })}
                    </div>
                    </a>
                    <video    
                        src={project.videoUrl}
                        className="rounded-xl w-[300px] h-[200px]"
                        poster={project.imageUrl} controls muted> </video>
                </div>
            )
    })
    return (
        <main className="flex flex-col py-[45px]">
            <h2 className="w-fit bg-violet-700/5 text-[20px] px-4 py-2 rounded-2xl text-violet-700">🔗 Portfolio</h2>
            <div className="flex justify-between mt-6">
                <h1 className="font-extrabold text-5xl text-white">Projects</h1>
                <div className="flex gap-8">
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

            <div className="flex justify-between w-full gap-[56px] mt-[100px]">
                {portEl}
            </div>
            
        </main>
    )
}

export default Portfolio