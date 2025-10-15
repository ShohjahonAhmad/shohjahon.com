import JavaScriptIcon from '../utils/skills/JavaScript'
import ReactIcon from '../utils/skills/ReactIcon'
import TypeScriptIcon from '../utils/skills/TypeScript'

const Skills = () => {
    return (
        <main className="flex flex-col items-center my-16">
            <h2 className="w-fit bg-violet-700/5 text-[20px] px-4 py-2 rounded-2xl text-violet-700">
                🧑‍💻 Skills · Experiences
            </h2>
            <h1 className="font-extrabold text-5xl text-white mt-6 mb-[100px]">
                Technologies & Skills
            </h1>
            <h3 className="text-2xl text-white/50 mb-[40px]">
                Techs I use on daily basis
            </h3>
            <div className="flex gap-8">
                <ReactIcon/>
                <JavaScriptIcon/>
                <TypeScriptIcon/>
            </div>
        </main>
    )
}

export default Skills