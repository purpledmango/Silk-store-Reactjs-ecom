import { AiOutlineLoading3Quarters } from "react-icons/ai";
const Spinner = () => {
    return (
        <div className="text-xl animate-spin w-full h-full mx-auto">
            <AiOutlineLoading3Quarters />
        </div>
    )
}

export default Spinner