import React, { useEffect } from 'react';
import { FaCircleCheck } from "react-icons/fa6";

interface CongratulationsProps {
    handleSubmit: () => void;
    loading: boolean;
    thankYouMessage: boolean;
}

const Congratulations: React.FC<CongratulationsProps> = ({
    handleSubmit,
    loading,
    thankYouMessage,
}) => {


    return (
        <div>
            <div className="mt-8 flex flex-col justify-center items-center">
                {loading ? (
                    <p className='my-16'>Submitting your information....</p>
                ) : (
                    <>
                        <FaCircleCheck className="text-teal text-9xl mb-10" />
                        <h2 className="text-2xl font-bold mb-4 text-center">Thank you!</h2>
                        <p className="text-center mb-8 md:w-1/2">
                            Your information has been submitted successfully. You will receive an email with your individual lease estimate within 10 minutes.
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};

export default Congratulations;