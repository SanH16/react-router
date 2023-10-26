import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePages() {
  const [state, setState] = useState();

  useEffect(() => {
    fetch("https://dummyjson.com/products").then((res) => {
      res.json().then(setState);
      console.log(res);
    });
  }, []);

  return (
    <div>
      <h1>Google E-Commerce</h1>
      <p>Our Products</p>
      {state ? (
        <div className="products">
          {state.products.map((item) => (
            <div className="products_item" key={item.id}>
              <h3>{item.title}</h3>
              <h4>({item.brand})</h4>
              <h5>{item.description}</h5>
              <p>$ {item.price}</p>
              <Link to={`/products/${item.id}`}>
                <img src={item.thumbnail} alt={item.title} />
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>loading..</p>
        </div>
      )}
    </div>
  );
}

export default HomePages;
