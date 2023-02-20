import React from 'react';
import { CircularProgress } from '@mui/material';

interface Props {
    primary?: string;
    spinning?: boolean;
    secondary?: string;
}
const Loading = (props: Props) => {

    const { primary, spinning, secondary } = props;

    const Primary = primary;
    const Spinning = spinning;
    const Secondary = secondary || 'Please wait...';

    return (
        <React.Fragment>
            {Spinning && (
                <div id="Loading" className="flex justify-center items-center">
                    <div className="text-center">
                        {Primary && (
                            <div className="font-bold mb-2">{Primary}</div>
                        )}
                        <div className="font-normal">{Secondary}</div>

                        <div className="lds-ring mt-8"><div></div><div></div><div></div><div></div></div>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
}

export default Loading;

export const LoadingMin = () => {

    return (
        <div className="flex justify-center my-4">
            <CircularProgress size={25} />
        </div>
    );
};