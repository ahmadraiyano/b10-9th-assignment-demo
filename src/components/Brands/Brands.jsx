import React, { useEffect, useState } from 'react';
import Brand from '../Brand/Brand';

const Brands = () => {

    const [brands, setBrands]= useState([]);

    useEffect(() => {
        fetch('couponData.json')
        .then(res => res.json())
        .then(data => setBrands(data))
    },[]);

    return (
        <div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8'>
                {
                    brands.map(brand => <Brand brand={brand} key={brand.product_id}></Brand>)
                }
            </div>
        </div>
    );
};

export default Brands;