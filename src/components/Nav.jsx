import React from 'react';

const Nav = () => {
    return (
        <ul className='navbar'>
            <div className='container--ecomerce'> 
                <p><span className='e'>E</span>-commerce</p>
            </div>
            <div className='container--item'>
               <a href=" " className='ancor'> <li className='navitem'>login</li></a>
               <a href=" " className='ancor'> <li className='navitem'>purchaser</li></a>
               <a href=" " className='ancor'> <li className='navitem'>cart</li></a>
                 
          </div>
        </ul>
    );
};

export default Nav;