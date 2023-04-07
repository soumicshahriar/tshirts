import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Anty from '../Anty/Anty';
import './Grandpa.css'

export const RingContext = createContext('diamond')
export const MoneyContext = createContext(0);

const Grandpa = () => {
 const ring = 'gold';
 const [money, setMoney] = useState(0)
 return (
  <div className='grandpa'>
   <h2>Grandpa</h2>
   <p>Has Money: {money}</p>
   <MoneyContext.Provider value={[money, setMoney]}>
    <RingContext.Provider value='diamond'>
     <section className='flex'>
      <Father ring={ring}></Father>
      <Uncle></Uncle>
      <Anty></Anty>
     </section>
    </RingContext.Provider>
   </MoneyContext.Provider>

  </div>
 );
};

export default Grandpa;

/**
 * Create a context
 * create a provider and pass a value
 * use useContext to recieve the value
 *  */ 