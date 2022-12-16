import React from 'react';
import BasketItem from "./BasketItem";

const BasketList = ({order, handleBasketShow}) => {
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0);

    return (
        <ul className="collection basket-list">
            <li className="collection-item active">Корзина</li>
            {
                order.length ? order.map(item =>
                    <BasketItem key={item.id} {...item} handleBasketShow={handleBasketShow}/>
                ) :  <li className="collection-item ">Корзина пуста</li>
            }
            <li className="collection-item">Общая стоимость: {totalPrice} руб.</li>
            <i className='material-icons basket-close' onClick={handleBasketShow}>close</i>
        </ul>
    );
};

export default BasketList;
