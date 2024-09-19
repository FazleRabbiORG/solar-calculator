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
        <h2 className="text-2xl font-bold mb-4 text-center">What kind of area is it?</h2>
        <p className="text-center mb-8">
          Please select an option.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {options.map((option) => (
            <button onClick={
              () => {
                setOwnsLand(option);
                handleNextStep();
              }
            } key={option} className={`flex flex-col items-center p-4 border rounded  ${option === ownsLand ? "bg-teal" : "hover:bg-black/30"}`}>
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


export default OwnLand;