import React from 'react';
import {useEffect, useState} from "react";
import {API_KEY, API_URL} from "../config";
import Loading from "./Loading";
import GoodsList from "./GoodsList";
import Cart from "./Cart";

const Shop = () => {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);

   const addToCart = (id) => {
      setOrder([...order, ...goods.filter(item => item.id === id)])
   }

    useEffect(() => {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY
            },
        }).then(response => response.json()).then(data => {
            data.featured && setGoods(data.featured)
            setLoading(false);
        });
    }, []);

    return (
        <main className="container content">
            <Cart quantity={order.length}/>
            {loading ? <Loading /> : <GoodsList goods={goods} addToCart={addToCart}/>};
        </main>
    );
};

export default Shop;
