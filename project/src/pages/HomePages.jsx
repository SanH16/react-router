import React, { useEffect, useState } from "react";
import InputCategory from "../components/InputCategory";
import { useDispatch } from "react-redux";
import { useDebounce } from "../hooks/useDebounce";
import { Link } from "react-router-dom";
import { addToCart } from "../store/cart";
import { APIproducts } from "../apis/APIProduct";

function HomePages() {
  const [product, setProduct] = useState();
  const [_payloadSearch, setPayloadSearch] = useState({ query: "", category: "" });
  const payloadSearch = useDebounce(_payloadSearch, 1000);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   fetch("https://dummyjson.com/products")
  //     .then((res) => res.json())
  //     .then(setProduct);
  // }, []);

  useEffect(() => {
    APIproducts.getProducts().then(setProduct);
  }, []);

  useEffect(() => {
    console.log(payloadSearch);
    if (payloadSearch)
      fetch(`https://dummyjson.com/products/search?q=${payloadSearch.query}`)
        .then((res) => res.json())
        .then(setProduct);

    if (payloadSearch.category)
      fetch(`https://dummyjson.com/products/category/${payloadSearch.category}`)
        .then((res) => res.json())
        .then(setProduct);
  }, [payloadSearch]);

  const handleQuerySearch = (e) => {
    // e.preventDefault();

    const queryInputSearch = e.target.value;
    setPayloadSearch({ category: "", query: queryInputSearch });
  };

  const handleCategory = (e) => {
    const category = e.target.value;
    setPayloadSearch({ query: "", category });
  };

  return (
    <div>
      <div>
        <label htmlFor="queryInputSearch">Search Products</label>
        <input
          id="queryInputSearch"
          type="text"
          name="queryInputSearch"
          value={_payloadSearch.query}
          onChange={handleQuerySearch}
        />

        <div>
          <InputCategory value={_payloadSearch.category} handleCategory={handleCategory} />
        </div>
        {payloadSearch.query && <p>Searching for : {payloadSearch.query}</p>}
        {payloadSearch.category && <p>Searching for category : {payloadSearch.category}</p>}
      </div>

      {product ? (
        <div className="products">
          {product.products.map((item) => (
            <div className="products_item" key={item.id}>
              <h3>{item.title}</h3>
              <h4>({item.brand})</h4>
              <h5>{item.description}</h5>
              <p>$ {item.price}</p>
              <Link to={`/products/${item.id}`}>
                <img src={item.thumbnail} alt={item.title} />
              </Link>
              <button onClick={() => dispatch(addToCart(item))}>+ cart</button>
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
