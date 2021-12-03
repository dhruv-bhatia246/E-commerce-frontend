import React from "react";
import { IoIosCart } from "react-icons/io";

/**
 * @author
 * @function Cart
 **/

const Cart = (props) => {
  return (
    <div style={{ fontSize: "20px", position: "relative" }}>
      {props.count > 0 ? <span
        style={{
          position: "absolute",
          backgroundColor:"#ff6161",
          width: "18px",
          height: "18px",
          borderRadius: "7px",
          fontSize: "12px",
          border: "1px solid #fff",
          textAlign: "center",
          alignSelf: "center",
          top: "-4px",
          right: "-7px",
        }}
      >
        {props.count}
      </span>
      : null
      }
      
      <IoIosCart />
    </div>
  );
};

export default Cart;