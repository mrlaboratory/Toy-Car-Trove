import React from 'react';
import { SyncLoader } from 'react-spinners';

const Spinner = () => {
    return (
        <div className='my-5 py-5 flex justify-center items-center min-h-screen'>
            <SyncLoader color="#f379a7" />
        </div>
    );
};

export default Spinner;