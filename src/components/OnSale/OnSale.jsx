import React from 'react';

const OnSale = ({ onSale }) => {

    const { brand_logo, brand_name, coupons, category } = onSale;
    return (
        <div className="card bg-base-100 border-2">
            <figure className="px-10 pt-10">
                <img
                    src={brand_logo}
                    alt={brand_name}
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{brand_name}</h2>
                <p>Available Coupons: {coupons.length}</p>
                <p>Category: {category}</p>
            </div>
        </div>
    );
};

export default OnSale;