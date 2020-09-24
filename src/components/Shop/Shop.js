import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import Products from "../Products/Products";

const Shop = (props) => {
  const { products, addToCart } = props;
  return (
    <div>
      <h3>Shop</h3>
      {products.map((pd) => (
        <Products products={pd} key={pd.id} addToCart={addToCart} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    products: state.products,
  };
};

const mapDispatchToProps = {
  addToCart: addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
