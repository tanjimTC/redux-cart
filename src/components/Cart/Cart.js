import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartActions";

const Cart = (props) => {
  const { cart, removeFromCart } = props;
  return (
    <div>
      <h1>Cart products</h1>
      <ul>
        {cart.map((pd) => (
          <li key={pd.cartId}>
            {pd.id} {pd.Name}{" "}
            <button onClick={() => removeFromCart(pd.cartId)}>X</button>
            <br />
          </li>
        ))}
        <br />
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  removeFromCart: removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
