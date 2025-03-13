import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const backgroundStyle = {
    backgroundImage:"url('https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    };

function Home () {
    const navigate = useNavigate();

    const clickMenu = (() => {
        navigate("/menu")
    });
    const clickStores = (() => {
        navigate("/stores")
    });
    const clickCart = (() => {
        navigate("/cart")
    });
    
    return (
        <div style={backgroundStyle}>
            <div className="row">
                <button onClick={clickMenu}><img src={ require('../data/noun-food-7543523.png') } alt="my image" width="50px" />MENU</button>
                <button onClick={clickStores}><img src={ require('../data/noun-food-7543523.png') } alt="my image" width="50px" />STORES</button>
                <button onClick={clickCart}><img src={ require('../data/noun-food-7543523.png') } width="50px" />CART</button>
            </div>
        </div>
    );
}

export default Home;