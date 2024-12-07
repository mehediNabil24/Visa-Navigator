import React from 'react';
import Banner from './Banner';
import { NavLink, useLoaderData } from 'react-router-dom';
import VisaCard from './VisaCard';

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
            <Banner />
            <div className='grid md:grid-cols-3 grid-cols-2 gap-6 my-8'>
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
        </div>
    );
};

export default Home;
