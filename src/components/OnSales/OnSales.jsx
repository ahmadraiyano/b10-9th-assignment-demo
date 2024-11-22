import React, { useEffect, useState } from 'react';
import OnSale from '../OnSale/OnSale'

const OnSales = () => {

    const [onSales, setOnSales]= useState([]);

    useEffect(() => {
        fetch('couponData.json')
        .then(res => res.json())
        .then(data => {
            const filtered = data.filter(onSale => onSale.isSaleOn);
            setOnSales(filtered)
        })
    },[]);

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                {
                    onSales.map(onSale => <OnSale onSale={onSale} key={onSale._id}></OnSale>)
                }
            </div>
        </div>
    );
};

export default OnSales;