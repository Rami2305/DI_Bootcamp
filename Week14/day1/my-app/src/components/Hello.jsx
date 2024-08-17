import React from "react";
const Hello = (props) => {
    console.log(props);
    const { username, subname, email} = props
    return (
        <>
            <h1>Hi {username}, {email},{subname}</h1>
            <h2>Prueba numero 12312 de {username}</h2>
        </>
    );
}


export default Hello