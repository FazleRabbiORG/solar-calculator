import React, { useEffect } from 'react';
import { FaCircleCheck } from "react-icons/fa6";
import {Spinner} from "@nextui-org/spinner";

interface CongratulationsProps {
    handleSubmit: () => void;
    loading: boolean;
    thankYouMessage: boolean;
    contactInfo: any;
}

const Congratulations: React.FC<CongratulationsProps> = ({
    handleSubmit,
    loading,
    thankYouMessage,
    contactInfo
}) => {


    return (
        <div>
            <div className="mt-8 flex flex-col justify-center items-center duration-100 animate-appearance-in">
                {loading ? (
                    <>
                    <Spinner size="lg" />
                    <p className='my-16 text-darkGray'>Submitting your information....</p>
                    </>
                ) : (
                    <>
                        <FaCircleCheck className="text-teal text-9xl mb-10" />
                        <h2 className="text-2xl font-bold mb-4 text-center">Sie haben es fast geschafft!</h2>
                        <p className="text-center mb-8 md:w-1/2">
                            {
                                `
                                Wir werden Ihnen innerhalb der nächsten 10 Minuten eine E-Mail mit Ihrer Berechnung an ${contactInfo.email} zusenden. Wenn Sie keine E-Mail erhalten haben, überprüfen Sie bitte Ihren Spam-Ordner und markieren Sie die E-Mail als "Nicht Spam".
                                `
                            }
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};

export default Congratulations;