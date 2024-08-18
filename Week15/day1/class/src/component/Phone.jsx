
import React, { useState } from 'react';

function Phone() {
   const [myPhone,setmyPhone] = useState({
    brand: "Samsung",
    model: "Galaxy S20",
    color: "black",
    year: 2020,
   })

   const changeColor = () => {
    const newPhone = {...myPhone, color: "blue"}
        setmyPhone(newPhone)
    };
    //creamos una copia de myphone para poder trabajar y poder manipularla
    
    return (
        <div>
            <h1>My phone is a {myPhone.brand}</h1>
            <p>It is a {myPhone.color} {myPhone.model} from {myPhone.year}</p>
            <button onClick={changeColor}>Change Color</button>
        </div>
    );
}

export default Phone;