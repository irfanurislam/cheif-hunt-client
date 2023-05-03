import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 px-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <h2 className="text-xl font-bold mb-2">About Delizios</h2>
            <p className="text-gray-400">Delizios is a brand that brings together some of the world's most talented Italian chefs and their best recipes. Our mission is to create delicious meals that bring people together.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Our Italian Chefs</h2>
            <ul>
              <li className="mb-1">Antonio Rossi</li>
              <li className="mb-1">Francesca Bianchi</li>
              <li className="mb-1">Giovanni Ricci</li>
              <li className="mb-1">Maria Greco</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Contact Us</h2>
            <p className="text-gray-400">Via della Rosa 23<br />Rome, Italy 00186<br />info@delizios.it</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Follow Us</h2>
            <ul>
              <li className="mb-1"><a href="#">Facebook</a></li>
              <li className="mb-1"><a href="#">Twitter</a></li>
              <li className="mb-1"><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-400">&copy; 2023 Delizios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
