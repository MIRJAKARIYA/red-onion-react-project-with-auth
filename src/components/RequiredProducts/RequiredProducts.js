import React from 'react';
import { useParams } from 'react-router-dom';

const RequiredProducts = () => {
    const {productType} = useParams();
    console.log(productType);
    return (
        <div>
            
        </div>
    );
};

export default RequiredProducts;