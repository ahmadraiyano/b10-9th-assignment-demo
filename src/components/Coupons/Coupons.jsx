import React, { useEffect, useState } from 'react';
import Coupon from '../Coupon/Coupon';

const Coupons = () => {

    const [coupons, setCoupons]= useState([]);

    useEffect(() => {
        fetch('couponData.json')
        .then(res => res.json())
        .then(data => setCoupons(data))
    },[]);

    return (
        <div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8'>
                {
                    coupons.map(coupon => <Coupon coupon={coupon} key={coupon.product_id}></Coupon>)
                }
            </div>
        </div>
    );
};

export default Coupons;