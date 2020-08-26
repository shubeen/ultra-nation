import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './Components/country/Country';
import Cart from './Components/Cart/Cart';

function App() {
 
  const [countries, setCountries]=  useState([]); // call useSate with emty array to set and call the data
  const [cart, setCart] = useState([])

 useEffect(()=> {
   fetch('https://restcountries.eu/rest/v2/all') // fetch data from website
   .then(res => res.json())
   .then(data => setCountries(data)) // set the countires name into sertCountires by useState.
   .catch(error=> console.log(error))// if no data is found catch helps to remain same and avoid getting error.
 }, [])

 const addCountry = (country) =>{ 
   const newCart = [...cart,country]; // ... operator use to copy the old one + new like 'country'
   setCart(newCart); // set the new one to the useState  
 }
 // function name = (parameter name 'country')=> show the 'country' parameter 


  return (
    <div className="App">
      <h1>country Names: {countries.length}</h1>
      <h4>country added: {cart.length}</h4>
      <Cart cart = {cart}></Cart>


      
        {
          countries.map(country => <Country country={country} key={country.alpha3Code} addCountry={addCountry}></Country> )//  always use {} to make it dynamic , use map as for loop 
        }
        
      
      
    </div>
  );
}

export default App;
