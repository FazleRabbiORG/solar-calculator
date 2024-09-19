import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";

interface landConnectivityProps {
    landConnectivity: String | null;
    setLandConnectivity: (value: string) => void;
    handleNextStep: () => void;
}

const LandConnectivity = ({
    landConnectivity,
    setLandConnectivity,
    handleNextStep
}: landConnectivityProps) => {

    const options = ["Yes", "No"];

    return (
        <div className="container mx-auto duration-100 animate-appearance-in">
            <h2 className="text-2xl font-bold mb-4 text-center">Is the area connected?</h2>
            <p className="text-center mb-8">
                Please select an option.
            </p>
            <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-4">
                    {options.map((option) => (
                        <button onClick={
                            () => {
                                setLandConnectivity(option);
                                handleNextStep();
                            }
                        } key={option}
                            className={`flex flex-col items-center px-12 py-8 border  rounded-lg duration-500 ${option === landConnectivity ? "bg-teal text-white" : " hover:bg-teal bg-lightTeal hover:text-white"}`}
                        >
                            <span className="text-5xl mb-2">{
                                option === "Yes" ? <FaRegCheckCircle /> : <FaRegTimesCircle />
                            } </span>
                            <span className="mt-4">{option}</span>
                        </button>
                    ))}
                </div>
            </div>

        </div>
    );
}


export default LandConnectivity;