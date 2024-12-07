import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ApplicationCard from './ApplicationCard';

const MyApplication = () => {
    const loadedVisas =useLoaderData();
    const [visas,setvisas] =useState(loadedVisas)
    console.log("Error finding",visas)
    return (
        <div className='grid grid-cols-3 gap-6'>
            {
                visas.map(visa=><ApplicationCard key={visa._id} visa={visa} visas={visas} setvisas={setvisas}></ApplicationCard>)
            }
            
        </div>
    );
};

export default MyApplication;