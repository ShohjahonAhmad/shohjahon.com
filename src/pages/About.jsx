import avatar from '../assets/avatar3.png'

const About = () => {
    return (
        <main className='flex flex-col lg:flex-row flex-1 items-center justify-center gap-x-32'>
            <div className='md:basis-1/3 flex justify-center'>
                <img 
                    src={avatar} 
                    alt="avatar"
                    className="w-2/3 md:w-full" />
            </div>

            <div className="md:basis-2/3 flex flex-col gap-6">
                <h2 className="w-fit bg-purple-700/5 text-[20px] px-4 py-2 rounded-2xl text-violet-700">🧐 About me</h2>
                <h1 className="text-5xl text-white font-extrabold">Shohjahon Ahmedov <br /> Baxtiyor o'g'li</h1>
                <p className='text-lg text-white/50 leading-6'>
                👋 My name is Shohjahon Ahmedov Baxtiyor o'g'li, but you can just call me Sean. Nice to meet you! <br /> <br />
                👨‍💻 I've been developing and programming web applications with JavaScript, React JS, and Typescript for over a year. <br />
                🎓 Studying Software Engineering at the University of Europe <br />
                💡 Interested in web development, cloud deployment and distributed systems. <br /> <br />
                🚀 Trying to be a little better than yesterday every day.
            </p>
            </div>
            
        </main>
    )
}

export default About