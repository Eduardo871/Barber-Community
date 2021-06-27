const express = require('express');
const server = express();
const { addItem,
    getCartsById,
    removeProductFromCart,
    getActiveCartFromUser,
    resetUserCart,
    changeCartState,
    changeCartStateMercadoPago} = require('../controllers/Cart');

server.post("/addItem/:id", addItem)

server.get("/:id", getCartsById)

server.delete("/:id", removeProductFromCart)

server.delete("/reset/:id", resetUserCart)

server.get("/active/:id", getActiveCartFromUser)

server.put("/state/:id", changeCartState)

server.put("/state/payment/:id", changeCartStateMercadoPago)


module.exports= server;