import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineStarPurple500 } from "react-icons/md";

const Brand = ({ brand }) => {

    const { _id, brand_logo, brand_name, rating, description, isSaleOn } = brand;
    return (
        <div className='border-2 flex'>
            <div className='p-2'>
                <figure className='w-40 border-2'>
                    <img
                        src={brand_logo} alt={brand_name}
                        className="rounded-xl h-full w-full object-cover" />
                </figure>
                <p className='flex items-center justify-center mt-2'>Rating: <span className='text-yellow-500 text-xl ml-1'><MdOutlineStarPurple500 /></span> {rating}</p>
            </div>
            <div>
                <div>
                    <h2 className='font-bold text-xl'>{brand_name}</h2>
                    <p>{description}</p>
                </div>
                <div>
                    {
                        isSaleOn === true? <><p className='animate-bounce text-green-500 my-2'>Sale is on</p></> : ""
                    }
                    <button className='btn'><Link to={`/brands/${_id}`}>Coupon</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Brand;