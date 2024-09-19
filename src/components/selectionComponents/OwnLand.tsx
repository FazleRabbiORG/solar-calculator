import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";

interface OwnLandProps {
  ownsLand: String | null;
  setOwnsLand: (value: string) => void;
  handleNextStep: () => void;
}

const OwnLand = ({
  ownsLand,
  setOwnsLand,
  handleNextStep
}: OwnLandProps) => {

  const options = ["Yes", "No"];

  return (
    <div className="container mx-auto duration-100 animate-appearance-in">
      <h2 className="text-2xl font-bold mb-4 text-center">Do you own the area?</h2>
      <p className="text-center mb-8">
        Please select an option.
      </p>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-4">
          {options.map((option) => (
            <button onClick={
              () => {
                setOwnsLand(option);
                handleNextStep();
              }
            } key={option}
              className={`flex flex-col items-center px-12 py-8 border  rounded-lg duration-500 ${option === ownsLand ? "bg-teal text-white" : " hover:bg-teal bg-lightTeal hover:text-white"}`}

            >
              <span className="text-4xl mb-2">{
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


export default OwnLand;