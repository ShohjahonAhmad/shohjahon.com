import { useLoaderData } from "react-router-dom";
import capitalize from "../utils/capitalize";

const baseUrl = import.meta.env.VITE_BASE_URL;

export async function loader () {
    try{
        const res = await fetch(`${baseUrl}/projects`);
        const data = await res.json();
        return data
    } catch(err){
        throw new Error(err.message)
    }
}

const Portfolio = () => {
    const {projects} = useLoaderData();
    console.log(projects)

    const portEl = projects.map(project => {
        return (
                <div className="flex flex-col border border-violet-700/50 rounded-xl p-[30px] w-[360px] h-[460px]" key={project.id}>
                    <a href={project.gitHub} target="_blank" rel="noopener noreferrer">
                    <h1 className="text-xl text-white font-bold">{project.title}</h1>
                    <div className="h-[100px] mt-2 mb-4">
                        <p className="text-white/50">{project.description}</p>
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
                    <div className="border w-[184px] border-violet-700/50 text-violet-700/50 rounded-xl text-center py-[11px]">
                        Front-End
                    </div>
                    <div className="border w-[184px] border-violet-700/50 text-violet-700/50 rounded-xl text-center py-[11px]">
                        FullStack-End
                    </div>
                    <div className="border w-[184px] border-violet-700/50 text-violet-700/50 rounded-xl text-center py-[11px]">
                        Backend-End
                    </div>
                </div>
            </div>

            <div className="flex justify-between w-full gap-[56px] mt-[100px]">
                {portEl}
            </div>
            
        </main>
    )
}

export default Portfolio