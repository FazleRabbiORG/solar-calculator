import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";

interface currentlyLeasedProps {
    currentlyLeased: String | null;
    setCurrentlyLeased: (value: string) => void;
    handleNextStep: () => void;
}

const CurrentlyLeased = ({
    currentlyLeased,
    setCurrentlyLeased,
    handleNextStep
}: currentlyLeasedProps) => {

    const options = ["Yes", "No"];

    return (
        <div className="container mx-auto duration-100 animate-appearance-in">
            <h2 className="text-2xl font-bold mb-4 text-center">Is the area currently leased?</h2>
            <p className="text-center mb-8">
                Please select an option.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {options.map((option) => (
                    <button onClick={
                        () => {
                            setCurrentlyLeased(option);
                            handleNextStep();
                        }
                    } key={option} className={`flex flex-col items-center p-4 border rounded  ${option === currentlyLeased ? "bg-teal" : "hover:bg-black/30"}`}>
                        <span className="text-4xl mb-2">{
                            option === "Yes" ? <FaRegCheckCircle /> : <FaRegTimesCircle />
                        } </span>
                        <span>{option}</span>
                    </button>
                ))}
            </div> 

        </div>
    );
}


export default CurrentlyLeased;