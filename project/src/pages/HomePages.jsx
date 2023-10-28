import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchGetPosts, selectPosts } from "../store/posts";
import { convertUTCtoLocalDate } from "../utils/convertUTCtoLocalDate";
import { Button, Skeleton } from "@mui/material";

const limit = 6;
function HomePages() {
  const statePosts = useSelector(selectPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetPosts({ limit, page: 0 }));
  }, [dispatch]);

  const totalPage = statePosts.status === "success" ? Math.floor(statePosts.data.total / 10 - 1) : 0;
  const { page } = statePosts.status === "success" ? statePosts.data : { page: 0 };

  return (
    <div>
      {statePosts.status === "pending" && <Skeleton variant="rectangular" width={210} height={118} />}
      {statePosts.status === "success" && (
        <>
          <div>
            <h1>Page : {page + 1}</h1>
          </div>
          <div className="products">
            {statePosts.data.data.map((article) => (
              <div className="products_item" key={article.id}>
                <h5>{article.text}</h5>
                <Link to={`/articles/${article.id}`}>
                  <img src={article.image} alt={article.image} />
                </Link>
                <p>🩷 {article.likes}</p>

                <p>Updated on {convertUTCtoLocalDate(new Date(article.publishDate))}</p>
              </div>
            ))}
          </div>
          <div>
            {statePosts.data.page > 0 && (
              <Button onClick={() => dispatch(fetchGetPosts({ limit, page: page - 1 }))}>Prev page</Button>
            )}

            {statePosts.data.page !== totalPage && (
              <Button onClick={() => dispatch(fetchGetPosts({ limit, page: page + 1 }))}>Next page</Button>
            )}
            <p>Total Page : {totalPage}</p>
          </div>
        </>
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
// }
export default HomePages;
