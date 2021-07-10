import React from "react";
import "./Cart.css";

const Cart = ({info})=>{
    return (
        <div className="cart">
            <img src={info.image} alt="" />
            <div className= "info">
                <h1>{info.name}</h1>
                <h2>{info.profesion}</h2>
                <div>
                    <a href={info.linkedin}><i class="fab fa-linkedin"></i></a>
                    <a href={info.github}><i class="fab fa-github"></i></a>
                </div>
            </div>
            <div className="color2"></div>
        </div>
    )
}

export default Cart;