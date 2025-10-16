import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError()
    console.log(err)
    return (
        <div className="w-full py-8">
        <h1 className="text-4xl text-white/50 mb-4 font-bold">{err.message || "Something went wrong"}</h1>
        <span className="text-xl text-white/50">{err.code || 500} - {err.statusText || "Internal Server Error"}</span>
    </div>
    )
}

export default Error