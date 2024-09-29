import { Slider } from '@nextui-org/react';
import React from 'react';

interface LandSizeProps {
    landSize: number;
    setLandSize: (size: number) => void;
}

function LandSize({
    landSize,
    setLandSize,
}: LandSizeProps) {
    return (
        <div className="container mx-auto duration-100 animate-appearance-in">
            <h2 className="text-2xl font-bold mb-4 text-center">Wie groß ist die Fläche?</h2>
            <p className="text-center mb-8">
            Bitte wählen Sie eine Option aus.
            </p>
            <div className='flex justify-between'>
                <p>1 Hektar</p>
                <p>100 Hektar</p>
            </div>
            <Slider
                size='lg'
                showTooltip
                color="primary"
                value={landSize}
                onChange={(e:any) => {
                    if (typeof e === 'number') {
                        setLandSize(e);
                    }
                }}
                minValue={1}
                maxValue={100}
                step={1}
                defaultValue={5}
            />
        </div>
    );
}

export default LandSize;