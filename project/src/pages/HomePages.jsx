import React, { useEffect } from "react";
// import InputCategory from "../components/InputCategory";
import { useDispatch, useSelector } from "react-redux";
// import { useDebounce } from "../hooks/useDebounce";
import { Link } from "react-router-dom";
// import { addToCart } from "../store/cart";
// import { APIproducts } from "../apis/APIProduct";
// import { APIpost } from "../apis/APIpost";
import { fetchGetPosts, selectPosts } from "../store/posts";
import { convertUTCtoLocalDate } from "../utils/convertUTCtoLocalDate";

function HomePages() {
  // const [product, setProduct] = useState();
  // const [_payloadSearch, setPayloadSearch] = useState({ query: "", category: "" });
  // const payloadSearch = useDebounce(_payloadSearch, 1000);
  const statePosts = useSelector(selectPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetPosts({ limit: 10, page: 1 }));
  }, [dispatch]);

  // useEffect(() => {
  //   console.log(payloadSearch);
  //   if (payloadSearch)
  //     fetch(`https://dummyjson.com/products/search?q=${payloadSearch.query}`)
  //       .then((res) => res.json())
  //       .then(setProduct);

  //   if (payloadSearch.category)
  //     fetch(`https://dummyjson.com/products/category/${payloadSearch.category}`)
  //       .then((res) => res.json())
  //       .then(setProduct);
  // }, [payloadSearch]);

  // const handleQuerySearch = (e) => {
  //   // e.preventDefault();

  //   const queryInputSearch = e.target.value;
  //   setPayloadSearch({ category: "", query: queryInputSearch });
  // };

  // const handleCategory = (e) => {
  //   const category = e.target.value;
  //   setPayloadSearch({ query: "", category });
  // };

  return (
    <div>
      <div>
        {/* <label htmlFor="queryInputSearch">Search Products</label>
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
        {payloadSearch.category && <p>Searching for category : {payloadSearch.category}</p>} */}
      </div>

      {statePosts.status === "pending" && <p>loading..</p>}
      {statePosts.status === "success" && (
        <div className="products">
          {statePosts.data.data.map((article) => (
            <div className="products_item" key={article.id}>
              <h5>{article.text}</h5>
              <p>🩷 {article.likes}</p>
              <Link to={`/articles/${article.id}`}>
                <img src={article.image} alt={article.image} />
              </Link>
              <p>Updated on {convertUTCtoLocalDate(new Date(article.publishDate))}</p>
            </div>
          ))}
        </div>
      )}

      {statePosts.status === "failed" && (
        <div>
          <p>someting went wrong</p>
          <p>{statePosts.message}</p>
        </div>
      )}
    </div>
  );
}

// function convertDateToLocalDataString(date) {
//   if (!date) return;
//   const newDate = new Date(date);

//   return newDate.toLocaleDateString();
// }
export default HomePages;
