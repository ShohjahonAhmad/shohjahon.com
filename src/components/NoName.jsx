import codeIcon from '../assets/CodeIcon.svg'
import projectsIcon from '../assets/ProjectsIcon.svg'
import designIcon from '../assets/DesignIcon.svg'

const NoName = (props) => {
    const experience = new Date().getFullYear() - 2024
    return (
        <div className="flex flex-col items-center justify-center w-full my-16">
    <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl">
        {[ 
            { icon: codeIcon, text: `${experience} year as`, title: "Programmer", bg: "" },
            { icon: projectsIcon, text: `${experience} year of`, title: "LeetCode", bg: "bg-purple-700/10" },
            { icon: designIcon, text: `${experience} year as`, title: "Student", bg: "" },
        ].map((item, i) => (
            <div
                key={i}
                className={`flex flex-col items-center py-8 px-5 border border-purple-700/50 rounded-xl flex-1 min-w-[200px] ${item.bg}`}
            >
                <img src={item.icon} className="mb-4 w-12 h-12" />
                <span className="text-base text-white text-center">{item.text}</span>
                <h1 className="text-2xl md:text-3xl text-white font-bold text-center">{item.title}</h1>
            </div>
        ))}
    </div>

    {/* Bottom Row */}
    <div className="flex flex-col md:flex-row justify-center gap-8 mt-8 w-full max-w-4xl bg-purple-700/10 rounded-xl p-6">
        {[
            { label: "Developer", value: "Full Stack" },
            { label: "LeetCode Problems", value: props.solved },
            { label: "Student", value: "SWE" },
        ].map((item, i) => (
            <div
                key={i}
                className="text-purple-700 text-center flex-1 flex flex-col justify-center min-w-[150px]"
            >
                <span className="text-base">{item.label}</span>
                <h1 className="text-2xl md:text-3xl font-bold">{item.value}</h1>
            </div>
        ))}
    </div>
</div>
    )
}

export default NoName;