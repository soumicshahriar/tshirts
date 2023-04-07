import React from 'react';
import Cousin from '../Cousin/Cousin';
import Friend from '../Friend/Friend';

const Anty = ({ring}) => {
 return (
  <div>
   <h2>Anty</h2>
   <section className='flex'>
    <Cousin>Abir</Cousin>
    <Cousin ring={ring}>Nibir</Cousin>
   </section>
  </div>
 );
};

export default Anty;