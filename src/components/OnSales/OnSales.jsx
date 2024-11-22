import React, { useEffect, useState } from 'react';
import OnSale from '../OnSale/OnSale'

const OnSales = () => {

    const [onSales, setOnSales]= useState([]);

    useEffect(() => {
        fetch('couponData.json')
        .then(res => res.json())
        .then(data => setOnSales(data))
    },[]);

    return (
        <div>
            <div>
                {
                    onSales.map(onSale => <OnSale onSale={onSale} key={onSale._id}></OnSale>)
                }
            </div>
        </div>
    );
};

export default OnSales;