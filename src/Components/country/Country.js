import React from 'react';

const Country = (props) => {
    
    const {name,population,region,flag} = props.country;
    const flagStyle= {height:'50px'}
    const countryStyle={border:'1px solid red' ,margin:"10px", padding:'10px'}
    const addCountry = props.addCountry;
    //  console.log(props);
    return (
        <div style={countryStyle}>
            <h4>Country Name : {name}</h4>
            <h5>Population :{population} </h5>
            <h5>Region : {region}</h5> 
            <img  style ={flagStyle} src={flag} alt=""/>
            <br/>
            <button onClick={()=>addCountry(props.country)}>Country Added</button>  
            
        </div>
    );
};
// button event handler is created in App.js because country is child component of App.js, eventhandler should pass from parent to child 
// to pass a eventhandler in a button click or somewhere it should be a arrow function otherwise it will automaticaly executed without click.
export default Country;