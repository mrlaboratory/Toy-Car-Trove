import React from 'react';
import useTitle from '../Hooks/useTitle';

const MyToys = () => {
    useTitle('My Toys')
    return (
        <div>
            <h2>my toys page</h2>
        </div>
    );
};

export default MyToys;