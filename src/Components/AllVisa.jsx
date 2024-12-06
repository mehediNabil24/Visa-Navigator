import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import VisaCard from './VisaCard';

const AllVisa = () => {
    const loadedVisa = useLoaderData();
    const [visas, setVisas] = useState(loadedVisa);
    return (
        <div>
            <div className='grid md:grid-cols-4 grid-cols-2 gap-10'>
                {
                    visas.map(visa=> <VisaCard key={visa._id} visa={visa} ></VisaCard>)
                }
            </div>
        </div>
       
    );
};

export default AllVisa;