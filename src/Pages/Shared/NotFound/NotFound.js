import React from 'react';
import fof from '../../../images/fof.png';

const NotFound = () => {
    return (
        <div>
            <h2 className=' text-center'>page not found...</h2>
            <img className='w-100 ' src={fof} alt="" />
        </div>
    );
};

export default NotFound;