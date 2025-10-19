const CopySmileIcon = ({className = "text-xl cursor-pointer transition"}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M27 23V5H9" stroke="#7B4AE2" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M23 9H5V27H23V9Z" stroke="#7B4AE2" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export default CopySmileIcon