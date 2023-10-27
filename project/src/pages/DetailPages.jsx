import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function DetailPages() {
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then(setProduct);
  }, [id]);
  return (
    <div>
      {product ? (
        <div>
          <h3>{product.title}</h3>
          <p>{product.category}</p>
          <h3>{product.description}</h3>
          <img src={product.thumbnail} alt={product.title} />
          <p>Price ${product.price}</p>
          <p>Rating {product.rating}</p>
        </div>
      ) : (
        <div>
          <p>loading..</p>
        </div>
      )}
      <Link to={"/"}>
        <button type="button">Back to the moon</button>
      </Link>
    </div>
  );
}

export default DetailPages;
