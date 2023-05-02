import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chef from './Chef';

const Chefs = () => {
    const chefs = useLoaderData()
    

    console.log(chefs)

    
    return (
        <div className='my-28 px-8'>
            <div className='grid grid-cols-3 gap-4'>
                {chefs.map(chef => <Chef
                key={chef.id}
                chef = {chef}
                >

                </Chef> )}
            </div>
        </div>
    );
};

export default Chefs;