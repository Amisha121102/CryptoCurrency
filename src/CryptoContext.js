import React, { createContext, useContext } from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { CoinList } from './config/api';
const Crypto = createContext();

const CryptoContext = ({children}) => {
const [currency, setCurrency] = useState("INR");
const [symbol,setSymbol] = useState("₹");
const [loading, setLoading] = useState(false);
const [coins, setCoins] = useState([]);

const fetchCoins = async () => {
  setLoading(true);
  const { data } = await axios.get(CoinList(currency));

  setCoins(data);
  setLoading(false);
};
  useEffect(() => {
   if(currency === "INR") setSymbol("₹");
   else if(currency === "USD") setSymbol("$");
   fetchCoins();
  }, [currency]);
  return (
   <Crypto.Provider value={{currency,symbol,coins,loading,setCurrency}}>
     {children}
   </Crypto.Provider>
  )
}

export default CryptoContext;

export const CryptoState = () =>{
    return useContext(Crypto);
};