import React from 'react';
import { Link } from 'react-router-dom';

const Coupon = ({ coupon }) => {

    const {_id, brand_logo, brand_name, rating } = coupon;
    return (
        <div>
            <div className="card bg-base-100 h-[420px] w-92">
                <figure className="px-6 pt-6 h-64">
                    <img
                        src={brand_logo} alt={brand_name}
                        className="rounded-xl h-full w-full object-cover" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{brand_name}</h2>
                    <p className='flex items-center content-center'>rating: <span className='text-md'></span>{rating}</p>
                    <div className="card-actions">
                        <button className="btn btn-outline">Copy Coupon</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coupon;