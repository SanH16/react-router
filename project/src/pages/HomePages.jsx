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
      <h1>Hola</h1>
      <p>Our Products</p>
      {state ? (
        <div>
          {state.products.map((item) => (
            <div key={item.id}>
              <Link to={`/products/${item.id}`}>
                <h3>{item.title}</h3>
              </Link>
              <h4>({item.brand})</h4>
              <h5>{item.description}</h5>
              <p>$ {item.price}</p>
              <img src={item.thumbnail} alt={item.title} />
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
