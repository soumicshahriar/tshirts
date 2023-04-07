import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ring}) => {
 const angti = useContext(RingContext)
 return (
  <div>
   <h6>Special</h6>
   <p>{angti}</p>
  </div>
 );
};

export default Special;