import React from 'react';
import {useEffect, useState} from "react";
import {API_KEY, API_URL} from "../config";
import Loading from "./Loading";
import GoodsList from "./GoodsList";
import Cart from "./Cart";
import BasketList from "./BasketList";

const Shop = () => {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);

    const addToCart = (item) => {
        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id);
        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });
            setOrder(newOrder);
        }

    }

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
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
            <Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
            {loading ? <Loading/> : <GoodsList goods={goods} addToCart={addToCart}/>}
            {
                isBasketShow && <BasketList order={order} handleBasketShow={handleBasketShow}/>
            }
        </main>
    );
};

export default Shop;
