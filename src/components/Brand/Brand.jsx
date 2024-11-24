import React from 'react';
import { Link } from 'react-router-dom';

const Brand = ({ brand }) => {

    const {_id, brand_logo, brand_name, rating } = brand;
    return (
        <div className='border-2 flex'>
                <div className="p-6 h-64">
                    <img
                        src={brand_logo} alt={brand_name}
                        className="rounded-xl h-full w-full object-cover" />
                </div>
                <div className="card-body">
                    <h2 className="card-title">{brand_name}</h2>
                    <p className='flex items-center content-center'>rating: <span className='text-md'></span>{rating}</p>
                    <div className="card-actions">
                        <Link to={`/brands/${_id}`}><button className="btn btn-outline">Coupon</button></Link>
                    </div>
                </div>
        </div>
    );
};

export default Brand;