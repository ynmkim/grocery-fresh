'use client';

import { useState } from "react";

export default function Cart() { // 부모 컨포넌트
  let cart = ['Orange', 'Apple', 'Carrot', 'Broccoli'];

  return (
    <div>
      <div className="container">
        <h3 className="sub-title">Cart</h3>
        <ul className="cart-list">
          {
            cart.map((k, i) => {
              return (
                <CartItem productName={cart[i]} key={i} />
              )
            })
          }
          <Banner discount="60" />
        </ul>
      </div>
    </div>
  )
}

function CartItem(props) { // 자식 컨포넌트
  let [quantity, quantityChange] = useState(0);

  return (
    <li className="cart-item">
      <h4 className="product-title">{props.productName} 500g</h4>
      <div className="product-quantity">
        <button className="button-quantity minus" onClick={() => {
          quantity !== 0
          ? quantityChange(quantity - 1)
          : null
        }}>-</button>
        <strong className="quantity">{ quantity }</strong>
        <button className="button-quantity plus" onClick={() => { quantityChange(quantity + 1) }}>+</button>
      </div>
      <strong className="product-price">$1</strong>
    </li>
  )
};

function Banner(props) {
  return (
    <div className="banner">
      Save up to { props.discount }% off on your first order
    </div>
  ) 
}