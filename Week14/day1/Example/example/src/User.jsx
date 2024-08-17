import React from "react";


const style = {
    display: 'inline-block',
    border: '5px solid blue',
    margin: '20px',
    backgroundcolor: 'blue',
    padding: '5px',
    textAling: 'center'    
}
const User = (props) => {
    console.log(props.info);
    const { id, name, username, email} = props.info
    return (
        <div style={style}>
            <img src={`https://robohash.org/${id}?size=150x150`}/>
            <h2>{name}</h2>
            <h4>{username}</h4>
            <p>{email}</p>
        </div>
    );
}


export default User