import portfolio from "../assets/portfolio.png"

const Portfolio = () => {
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
                <div className="flex flex-col border border-violet-700/50 rounded-xl p-[30px] w-[360px] h-[460px]">
                    <h1 className="text-xl text-white font-bold">Move.it</h1>
                    <div className="h-[100px] mt-2 mb-4">
                        <p className="text-white/50">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis autem aliquam sed est rerum... </p>
                    </div>
                    <div className="flex gap-2 mb-[22px]">
                        <div className="rounded-xl px-2 py-1 text-violet-700 bg-violet-700/10">
                            React JS
                        </div>
                        <div className="rounded-xl px-2 py-1 text-violet-700 bg-violet-700/10">
                            TypeScript
                        </div>
                    </div>
                    <img    
                        src={portfolio} alt="project photo" 
                        className="rounded-xl w-[300px] h-[200px]" />
                </div>

                <div className="flex flex-col border border-violet-700/50 rounded-xl p-[30px] w-[360px] h-[460px]">
                    <h1 className="text-xl text-white font-bold">Move.it</h1>
                    <div className="h-[100px] mt-2 mb-4">
                        <p className="text-white/50">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis autem aliquam sed est rerum... </p>
                    </div>
                    <div className="flex gap-2 mb-[22px]">
                        <div className="rounded-xl px-2 py-1 text-violet-700 bg-violet-700/10">
                            React JS
                        </div>
                        <div className="rounded-xl px-2 py-1 text-violet-700 bg-violet-700/10">
                            TypeScript
                        </div>
                    </div>
                    <img    
                        src={portfolio} alt="project photo" 
                        className="rounded-xl w-[300px] h-[200px]" />
                </div>

                <div className="flex flex-col border border-violet-700/50 rounded-xl p-[30px] w-[360px] h-[460px]">
                    <h1 className="text-xl text-white font-bold">Move.it</h1>
                    <div className="h-[100px] mt-2 mb-4">
                    <p className="text-white/50">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis autem aliquam sed est rerum... </p>
                    </div>
                    <div className="flex gap-2 mb-[22px]">
                        <div className="rounded-xl px-2 py-1 text-violet-700 bg-violet-700/10">
                            React JS
                        </div>
                        <div className="rounded-xl px-2 py-1 text-violet-700 bg-violet-700/10">
                            TypeScript
                        </div>
                    </div>
                    <img    
                        src={portfolio} alt="project photo" 
                        className="rounded-xl w-[300px] h-[200px]" />
                </div>

                <div className="flex flex-col border border-violet-700/50 rounded-xl p-[30px] w-[360px] h-[460px]">
                    <h1 className="text-xl text-white font-bold">Move.it</h1>
                    <div className="h-[100px] mt-2 mb-4">
                        <p className="text-white/50">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis autem aliquam sed est rerum... </p>
                    </div>
                    <div className="flex gap-2 mb-[22px]">
                        <div className="rounded-xl px-2 py-1 text-violet-700 bg-violet-700/10">
                            React JS
                        </div>
                        <div className="rounded-xl px-2 py-1 text-violet-700 bg-violet-700/10">
                            TypeScript
                        </div>
                    </div>
                    <img    
                        src={portfolio} alt="project photo" 
                        className="rounded-xl w-[300px] h-[200px]" />
                </div>

                
            </div>
        </main>
    )
}

export default Portfolio