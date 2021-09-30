import React from 'react';

const Cart = (props) => {
  const {order}=props;

  // console.log(props.order.length);

  console.log(order);

  const reducer=(previous,meal)=>previous+meal.quantity;
  const quantity=order.reduce(reducer,0);



    return (
        <div>
            <h4>Total Order: {quantity} </h4>
            <h4>Food price:  </h4>
            <h4>Delivery Cost:</h4>
            <h4>Tax:</h4>
            <h2>Total Price:</h2>
            
        </div>
    );
};

export default Cart;