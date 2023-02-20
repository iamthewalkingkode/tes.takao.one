import React from 'react';
import { Button } from '@mui/material';

interface Props {
    meta: {
        next: string;
        previous: string;
        page: number;
        total: number;
    };
    navigate: (cursor: string) => void;
}
const Pagination = ({ meta, navigate }: Props) => {

    return (
        <React.Fragment>
            <div id="Pagination">
                <Button
                    size="small"
                    variant="outlined"
                    disableElevation
                    color="primary"
                    disabled={!meta.previous}
                    onClick={() => navigate(meta.previous)}
                >
                    Previous
                </Button>
                &nbsp; &nbsp;
                <Button
                    size="small"
                    variant="outlined"
                    disableElevation
                    color="primary"
                    disabled={!meta.next}
                    onClick={() => navigate(meta.next)}
                >
                    Next
                </Button>
            </div>
        </React.Fragment>
    );
}


export default Pagination;