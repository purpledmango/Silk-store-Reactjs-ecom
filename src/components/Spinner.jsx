import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Spinner = () => {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="text-4xl animate-spin">
                <AiOutlineLoading3Quarters />
            </div>
        </div>
    );
};

export default Spinner;
