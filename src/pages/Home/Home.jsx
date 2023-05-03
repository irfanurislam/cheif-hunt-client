import React from 'react';
import Banner from './Banner';
import Chefs from './Chefs';
import Items from './Items';
import Reviewer from './Reviewer';


const Home = () => {
    return (
        <div className='px-8'>
            <Banner></Banner>
            <Chefs></Chefs>
            <Items></Items>
           
            <Reviewer></Reviewer>
        </div>
    );
};

export default Home;