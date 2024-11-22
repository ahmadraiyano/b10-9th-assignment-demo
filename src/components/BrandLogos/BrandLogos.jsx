import React, { useEffect, useState } from 'react';
import BrandLogo from '../BrandLogo/BrandLogo';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const BrandLogos = () => {

    const [brandLogos, setBrandLogos]= useState([]);

    useEffect(() => {
        fetch('couponData.json')
        .then(res => res.json())
        .then(data => setBrandLogos(data))
    },[]);

    return (
        <div>
            <Marquee pauseOnHover={true} className='space-x-20 bg-gray-200 p-4'>
            <Link to="/brands">
            <div className='flex gap-20'>
                {
                    brandLogos.map(brandLogo => <BrandLogo brandLogo={brandLogo} key={brandLogo._id}></BrandLogo>)
                }
            </div>
            </Link>
            </Marquee>
        </div>
    );
};

export default BrandLogos;