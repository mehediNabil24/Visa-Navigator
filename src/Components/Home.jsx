import React from 'react';
import Banner from './Banner';
import { NavLink, useLoaderData } from 'react-router-dom';
import VisaCard from './VisaCard';
import Features from './Features';

import InfoSection from './InfoSection';

const Home = () => {
    const visas = useLoaderData();

    // Debugging: Check the data structure
    console.log(visas);

    // Sort visas by createdAt in descending order
    const sortedVisas = [...visas].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    // Debugging: Check the sorted visas
    console.log(sortedVisas);

    return (
        <div>
            <section className='w-full'><Banner></Banner></section>
            <div className=' grid md:grid-cols-3 grid-cols-2 gap-10 my-8 bg-gray-100 p-16'>
                {
                    // Display the latest 4 visas
                    sortedVisas.slice(0, 6).map(visa => (
                        <VisaCard key={visa._id} visa={visa} />
                    ))
                }
                
            </div>
            <div className='flex items-center justify-center'>
                <NavLink to={'/allVisa'} className={'btn btn-success '}>See All Visas</NavLink>
                </div>
                <section className='my-8'><Features></Features></section>
                <section><InfoSection></InfoSection></section>
        </div>
        
    );
};

export default Home;
