import React from 'react';
import GoodsItem from "./GoodsItem";

const GoodsList = (props) => {
    const {goods = []} = props;

    return (
        <div className='goods'>
            {
                (!goods.length) ? <h3>Nothing here</h3> : goods.map(item => <GoodsItem key={item.id} {...item}/>)
            }
        </div>
    )
};

export default GoodsList;
