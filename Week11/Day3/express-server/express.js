// const express = require('express');

// const app = express();

// app.listen(5001, () => {
//     console.log('run on 5001')
// })

// //
// ** app.get() = app.get() se utiliza para definir una ruta que manejará las solicitudes HTTP GET. 
// Las solicitudes GET se utilizan generalmente para solicitar datos del servidor.

// ** app.post() = se utiliza para definir una ruta que manejará las solicitudes HTTP POST. 
// Las solicitudes POST se utilizan generalmente para enviar datos al servidor, por ejemplo, para crear un nuevo recurso.

// ** app.put()= se utiliza para definir una ruta que manejará las solicitudes HTTP PUT. 
// Las solicitudes PUT se utilizan generalmente para actualizar un recurso existente en el servidor.

// ** app.delete() = se utiliza para definir una ruta que manejará las solicitudes HTTP DELETE. 
// Las solicitudes DELETE se utilizan generalmente para eliminar un recurso del servidor.

// app.get("/users", (req, res) =>{
//     let users = [
//         {name:'John', age: 401},
//         {name:'anne', age: 123},
//         {name:'rami', age: 34}
//     ]
//     res.status(404).json(users);
    // res.sendStatus(201);
// }) 

// app.post("/users", (req, res) =>{
//     res.send("hello Rami, from users route");
// }) 




const express = require("express");
const { products } = require("./config/data.js");

console.log(products);

const app = express()

app.listen(5001, () => {
    console.log("run on 5001");
});

app.get("/products", (req, res) => {
    res.json(products);
})

/** get on product */
/** params */
app.get("/products/:id", (req, res) => {
    console.log(req.params);
    const { id } = req.params;

    const myprod = products.find((item) =>item.id == id);
    if (!myprod) return res.status(404).json({ msg: "product not found"})

    res.json(myprod);
})

/** query - to extract data*/

app.get("/search", (req, res)=> {
    console.log(req.query);
    const { name } = req.query;
    const filtered = products.filter((item)=>{
        return item.name.toLowerCase().includes(name.toLocaleLowerCase());
    });
    if(filtered.length ===0){
        return res.sendStatus(404);
        // return res.status(404).json({msg:'no product match your search'});
    }
    res.json(filtered);
})