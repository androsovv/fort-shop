import React from 'react';
import {useContext} from "react";
import {ShopContext} from "../context";

const BasketItem = ({ id, name, price, quantity, removeFromBasket, incItem, decItem}) => {
    const {example} = useContext(ShopContext);
    console.log(example);

    return (
        <li className="collection-item ">{name} x{quantity} = {price * quantity } руб.
            <span className='secondary-content' onClick={() => removeFromBasket(id)}>
                <i className='material-icons basket-delete'>close</i>
            </span>
            <div className="change-quantity">
                <span className='add-quantity' onClick={() => incItem(id)}>+</span>
                <span className="quantity">{quantity}</span>
                <span className='remove-quantity' onClick={() => decItem(id)}>-</span>
            </div>
        </li>
    );
};

export default BasketItem;
