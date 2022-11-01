const express = require("express");

const app = express();

app.get("/mensaje", (req, res) =>{
    res.send("hola");
})

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, ()=>{
    console.log(`server listenning in port ${PORT}`);
});

server.on("error", error => console.log(`error on server ${error}`));

