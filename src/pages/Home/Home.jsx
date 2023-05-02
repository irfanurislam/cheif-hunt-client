import React from 'react';
import Banner from './Banner';
import Chefs from './Chefs';
import Items from './Items';

const Home = () => {
    return (
        <div className='px-8'>
            <Banner></Banner>
            <Chefs></Chefs>
            <Items></Items>
        </div>
    );
};

export default Home;