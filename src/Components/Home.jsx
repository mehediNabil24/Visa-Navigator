import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import { NavLink, useLoaderData } from 'react-router-dom';
import VisaCard from './VisaCard';
import Features from './Features';
import InfoSection from './InfoSection';

const Home = () => {
    const visas = useLoaderData();

    // State for theme
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    // Toggle theme
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    // Apply theme class to body
    useEffect(() => {
        document.body.className = isDarkTheme ? 'dark-theme' : 'light-theme';
    }, [isDarkTheme]);

    const sortedVisas = [...visas].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return (
        <div className={`min-h-screen ${isDarkTheme ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
            <header className="flex justify-end p-4">
                <button
                    onClick={toggleTheme}
                    className="px-4 py-2 border rounded bg-blue-500 text-white hover:bg-blue-600"
                >
                    {isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
                </button>
            </header>
            <section className="w-full"><Banner /></section>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-10 my-8 p-16 ">
                {sortedVisas.slice(0, 6).map(visa => (
                    <VisaCard key={visa._id} visa={visa} />
                ))}
            </div>
            <div className="flex items-center justify-center">
                <NavLink to={'/allVisa'} className={'btn btn-success'}>See All Visas</NavLink>
            </div>
            <section className="my-8"><Features /></section>
            <section><InfoSection /></section>
        </div>
    );
};

export default Home;
