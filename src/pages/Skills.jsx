import JavaScriptIcon from '../utils/skills/JavaScript'
import ReactIcon from '../utils/skills/ReactIcon'
import TypeScriptIcon from '../utils/skills/TypeScript'
import ExpressIcon from '../utils/skills/ExpressIcon'
import GitIcon from '../utils/skills/GitIcon'
import GitHubIcon from '../utils/skills/GitHubIcon'
import TailWindCSSIcon from '../utils/skills/TailWindCSSIcon'
import PostgreSQLIcon from '../utils/skills/PostgreSQLIcon'
import MongoDBIcon from '../utils/skills/MongoDBIcon'
import GolangIcon from '../utils/skills/GolangIcon'
import PythonIcon from '../utils/skills/PythonIcon'
import DockerIcon from '../utils/skills/DockerIcon'
import AWSIcon from '../utils/skills/AWSIcon'
import JavaIcon from '../utils/skills/JavaIcon'
import Cplusplus from '../utils/skills/Cplusplus'
import NodeIcon from '../utils/skills/NodeIcon'

const Skills = () => {
    return (
        <main className="flex flex-col items-center my-16">
            <h2 className="w-fit bg-violet-700/5 text-[20px] px-4 py-2 rounded-2xl text-violet-700">
                🧑‍💻 Skills · Experiences
            </h2>
            <h1 className="font-extrabold text-5xl text-white mt-6 mb-[100px]">
                Technologies & Skills
            </h1>
            <h3 className="text-2xl text-white/50 mb-10">
                Techs I use on daily basis
            </h3>
            <div className="flex gap-8 mb-15">
                <ReactIcon/>
                <JavaScriptIcon/>
                <TypeScriptIcon/>
                <NodeIcon/>
                <ExpressIcon/>
                <GitIcon/>
                <GitHubIcon/>
                <TailWindCSSIcon/>
                <PostgreSQLIcon/>
            </div>
            <h3 className="text-2xl text-white/50 mb-10">
                Other techs I've worked with
            </h3>
            <div className="flex gap-8">
                <MongoDBIcon/>
                <GolangIcon/>
                <PythonIcon/>
                <DockerIcon/>
                <AWSIcon/>
                <JavaIcon/>
                <Cplusplus/>
                
            </div>
        </main>
    )
}

export default Skills