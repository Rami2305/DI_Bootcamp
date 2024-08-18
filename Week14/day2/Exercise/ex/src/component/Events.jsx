import React, { useState } from 'react';

const Events =() => {
    const [inputValue, setInputValue] = useState('');
    //to save the value of enter field i define a usestate hook
    
    const clickMe = () => {
        alert("i was clicked")
    }    

    const handleKeyDown =(event) => {
        if (event.key === 'Enter') {
            alert(`You pressed Enter. Input value: ${inputValue}`);
        }
    }
    // Here the function checks if the key pressed is "enter" and if it is, shows an alert.
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    // the fx handleChange is a handleevents that it execute every time that users write on the entryfield
    //It activate himself each time that the value of the entryfield changes.
    // The "event" happens when a change happens on the entreyfield. it contains information about the event
    //including the value of the entryfield
        return(
            <div>
                <button onClick={(clickMe)}>Click Me</button>
                <input 
                    type="text" 
                    placeholder="Press the Enter key!" 
                    onKeyDown={handleKeyDown} 
                    onChange={handleChange} 
                    value={inputValue}
                />
            </div>
        ) 
}
export default Events;