import React, { useEffect, useState } from "react";
import cartDark from "../../assets/icon/cart-dark.svg";
import cartLight from "../../assets/icon/cart-light.svg";
import { useSelector } from "react-redux";
import { isDarkMode, selectTheme } from "../../store/theme";
import { selectCart } from "../../store/cart";
import { Link } from "react-router-dom";

export default function Cart() {
  const [isShowed, setIsShowed] = useState(false);
  const { mode } = useSelector(selectTheme);
  const { data: products, totalProducts } = useSelector(selectCart);

  const handleMouseEnterAndLeave = () => {
    setIsShowed(!isShowed);
  };

  useEffect(() => {
    const persisRoot = JSON.parse(localStorage.getItem("persist:root"));
    const cart = JSON.parse(persisRoot.cart);
    console.log({ cart });
  }, []);

  return (
    <>
      <div className="cart-root" onMouseEnter={handleMouseEnterAndLeave}>
        <img className="cart-svg" src={isDarkMode(mode) ? cartLight : cartDark} alt="cart" />
        <span className="cart-total">{totalProducts}</span>
      </div>
      {isShowed && (
        <div className="cart-list" onMouseLeave={handleMouseEnterAndLeave}>
          {products.map((product) => (
            <div key={product.id}>
              <h4>
                <Link to={`/products/${product.id}`}>
                  <span style={isDarkMode(mode) ? { color: "lightblue" } : { color: "black" }}>{product.title}</span>
                </Link>
              </h4>
              <p>$ {product.price}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
