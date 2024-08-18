import React, { useState } from 'react';
import Garage from './Garage';

const carInfo = {
    name: "Ford",
    model: "Mustang"
};

function Car() {
    const [color] = useState("red"); 

    return (
        <div>
            <h1>This car is a {color} {carInfo.model}</h1>
            <Garage size="small" /> 
        </div>
    );
}

export default Car;