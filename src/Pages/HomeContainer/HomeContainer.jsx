import React from 'react';
import Hero from '../Hero/Hero';
import Search from '../Search/Search';
import Category from '../Category/Category';
import Offer from '../Offer/Offer';

const HomeContainer = () => {
    return (
        <>
            <Hero />
            <Search />
            <Category />
            <Offer />
        </>
    );
};

export default HomeContainer;