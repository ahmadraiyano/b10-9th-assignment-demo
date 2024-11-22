import React from 'react';
import BrandLogos from '../BrandLogos/BrandLogos';

const TopBrands = () => {
    return (
        <div>
            <div>
                <h2 className='text-center text-2xl font-bold'>Top Brands</h2>
                <p className='text-justify'>Top brands are known for their innovation, quality, and broad market appeal, offering diverse products and strong customer support. They often use coupons and special offers as part of their marketing strategy to attract and retain customers. With a global presence and a focus on sustainability, these brands continue to lead their industries through constant innovation and development.</p>
            </div>
            <div>
                <BrandLogos></BrandLogos>
            </div>
        </div>
    );
};

export default TopBrands;