import codeIcon from '../assets/CodeIcon.svg'

const NoName = () => {
    const experience = new Date().getFullYear() - 2024
    return (
        <div className='flex flex-col items-center justify-center w-full my-[100px]'>
            <div className="flex gap-20">
                <div className="flex flex-col items-center py-10 px-5 border border-purple-700/50 rounded-xl w-[246px] h-[200px]">
                    <img src={codeIcon} alt="code icon" className='mb-4' />
                    <span className='text-base text-white'>{experience} year as</span>
                    <h1 className='text-3xl text-white font-bold'>Programmer</h1>
                </div>
                
                <div className="flex flex-col items-center py-10 px-5 border border-purple-700/50 rounded-xl w-[246px] h-[200px]">
                    <img src={codeIcon} alt="code icon" className='mb-4' />
                    <span className='text-base text-white'>{experience} year as</span>
                    <h1 className='text-3xl text-white font-bold'>Experience</h1>
                </div>

                <div className="flex flex-col items-center py-10 px-5 border border-purple-700/50 rounded-xl w-[246px] h-[200px]">
                    <img src={codeIcon} alt="code icon" className='mb-4' />
                    <span className='text-base text-white'>{experience} year as</span>
                    <h1 className='text-3xl text-white font-bold'>Student</h1>
                </div>
            </div>
            <div className='flex justify-center gap-20 mt-8 items-center bg-purple-700/10 w-[898px] h-[110px] rounded-xl'>
                <div className='text-purple-700 text-center w-[246px] h-[200px] flex flex-col justify-center'>
                    <span className='text-base'>Developer</span>
                    <h1 className='text-3xl'>Full Stack</h1>
                </div>
                <div className='text-purple-700 text-center w-[246px] h-[200px] flex flex-col justify-center'>
                    <span className='text-base'>Dozens of projects</span>
                    <h1 className='text-3xl'>Experience</h1>
                </div>
                <div className='text-purple-700 text-center w-[246px] h-[200px] flex flex-col justify-center'>
                    <span className='text-base'>Student</span>
                    <h1 className='text-3xl'>SWE</h1>
                </div>
            </div>
        </div>
    )
}

export default NoName;