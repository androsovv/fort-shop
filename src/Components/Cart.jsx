import React from 'react';

const Cart = (props) => {
    const {quantity} = props;
    return (
        <div className='cart blue darken-4 white-text'>
            <i className='material-icons'>shopping_cart</i>
            {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
        </div>
    );
};

export default Cart;
