import React from 'react';
import useProducts from '../../hooks/useProducts';

const OrderReview = () => {
    const [products] = useProducts();

    return (
        <div>
            <h1>Track your orders {products.length}</h1>
        </div>
    );
};

export default OrderReview;