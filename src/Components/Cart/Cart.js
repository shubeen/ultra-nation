import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // let totalPopulation = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     totalPopulation = totalPopulation + country.population;
        
    // }
    let totalPopulation = 0;
    for (let i = 0; i < cart.length; i++) {
        const country = cart[i];
        totalPopulation= totalPopulation + country.population;
        
    }
    return (
        <div>
            <h4>This is cart : {cart.length}</h4>
            <p>Population : {totalPopulation}</p>
        </div>
    );
};

export default Cart;