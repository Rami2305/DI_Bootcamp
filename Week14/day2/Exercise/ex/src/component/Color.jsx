import React, { useState, useEffect} from 'react'

function Color() {
    const [color,setFavoriteColor] = useState('yellow')
    
    
    
    useEffect(() => {
        alert("useEffect reached");
    }, []);
    

    return (
         <div>
            <h1>My favorite color is {color}</h1>
            <button onClick={() => setFavoriteColor("blue")}>Change Color</button>
         </div>
    );
 }
 
 export default Color;