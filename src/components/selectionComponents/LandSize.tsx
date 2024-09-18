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
        <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">How big is the area</h2>
            <p className="text-center mb-8">
                Please use the slider to choose your area size. (10,000 m² = 1 hectare)
            </p>
            <div className='flex justify-between'>
                <p>1 hectare</p>
                <p>100 hectares</p>
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