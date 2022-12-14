import React from 'react';
import {useEffect, useState} from "react";
import {API_KEY, API_URL} from "../config";
import Loading from "./Loading";
import GoodsList from "./GoodsList";

const Shop = () => {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);

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
            {loading ? <Loading /> : <GoodsList goods={goods}/>};
        </main>
    );
};

export default Shop;
