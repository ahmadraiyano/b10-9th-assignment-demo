import React from 'react';

const OnSale = ({ onSale }) => {

        const {brand_logo, brand_name, isSaleOn } = onSale;
    return (
        <div>
                <div>
                <figure className='w-20 md:w-40 border-2'>
                    <img
                        src={brand_logo} alt={brand_name}
                        className="rounded-xl h-full w-full object-cover" />
                </figure>
                </div>
        </div>
    );
};

export default OnSale;