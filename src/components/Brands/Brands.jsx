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
            <div>
                <h1 className='text-center text-3xl font-bold'>All Available Brands</h1>
            </div>
            
            <div className='grid grid-cols-1 gap-2'>
                {
                    brands.map(brand => <Brand brand={brand} key={brand.product_id}></Brand>)
                }
            </div>
        </div>
    );
};

export default Brands;