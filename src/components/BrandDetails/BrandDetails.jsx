import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BrandDetails = () => {

    const { _id } = useParams();

    const data = useLoaderData();

    const brand = data.find(brand => brand._id === _id);

    const { brand_logo, brand_name,  rating, _id: id } = brand;


    return (
        <div className='bg-purple-500 py-10 relative mb-[420px]'>
            <div className='w-9/12 mx-auto text-white'>
                <h2 className="text-2xl text-center font-bold mb-6">Product Details</h2>
                <p className='text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className='h-[180px]'></div>

            <div className="bg-white absolute -bottom-24 lg:-bottom-96 w-10/12 left-7 lg:left-24 border-slate-100 p-4 border rounded-lg">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={brand_logo}
                        className="max-w-sm rounded-lg" />
                    <div className='gap-y-4'>
                        <h1 className="text-5xl font-bold">{brand_name}</h1>
                        <p className='flex items-center content-center my-4'>Price: {rating}</p>
                        <div>
                        <h3 className='font-bold text-lg'>Specification</h3>
                        </div>
                        <div className='my-4'>
                        <h3 className='font-bold text-lg'>Rating</h3>
                        <span className='flex content-center items-center'>
                        <p className='ml-1'>{rating}</p>
                        </span>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandDetails;