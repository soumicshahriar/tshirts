import React, { Children } from 'react';
import Friend from '../Friend/Friend';

const Cousin = ({ children,ring }) => {
 return (
  <div>
   <h4>Cousin</h4>
   <p>{children}</p>
   <Friend ring={ring}></Friend>
  </div>
 );
};

export default Cousin;