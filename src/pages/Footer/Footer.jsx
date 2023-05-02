import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#1A1919] text-white px-14 py-10">
        <div className="py-32">
          <div className="grid lg:grid-cols-5 md:grid-cols-3  gap-4">
            <div className="">
                <h2 className='mb-4 text-3xl font-extrabold'>delizios</h2>
                <p className='mb-4 text-base leading-7'>There are many Jobs In the Site you Have apply frequently,daily updating,worldwide jobs </p>
             <p>
            
             </p>
            </div>
            <div className="">
            <h2 className='mb-4 text-xl font-bold'>Company</h2>
            <div className='text-base'>
            <p className='mb-4'>About</p>
            <p className='mb-4'>Work</p>
            <p className='mb-4'>Latest News</p>
            <p className='mb-4'>Career</p>
            </div>
            </div>

            <div className="">
              <h2 className='mb-4 text-xl font-bold'>Product</h2>
            <div className='text-base'>
            <p className='mb-4'>Prototype</p>
            <p className='mb-4'>Plans & Pricing</p>
            <p className='mb-4'>Customers</p>
            <p className='mb-4'>Integrations</p>
            </div>
            </div>
            <div className="">
            <h2 className='mb-4 text-xl font-bold'>Support</h2>
            <div className='text-base'>
            <p className='mb-4'>Help Desk</p>
            <p className='mb-4'>Sales</p>
            <p className='mb-4'>Become a Partner</p>
            <p className='mb-4'>Developers</p>
            </div>
            </div>
            <div className="">
            <h2 className='mb-4 text-xl font-bold'>Contact</h2>
            <div className='text-base'>
            <p className='mb-4'>524 Broadway , Muradpur</p>
            <p className='mb-4'>+1 777 - 978 - 5570</p>
            
            </div>
            </div>
          </div>
          
        </div>
        <hr className='mb-4 bg-fuchsia-200' />
        <div className='flex justify-between text-base mb-12'>
            <p>@2023 KnowldegeCheife. All Rights Reserved</p>
            <p>Powered by FindJob</p>
        </div>
      </footer>
    );
};

export default Footer;