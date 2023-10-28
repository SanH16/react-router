import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchGetPostById, selectPost } from "../store/postSlice";
import { convertUTCtoLocalDate } from "../utils/convertUTCtoLocalDate";

function DetailPages() {
  const statePost = useSelector(selectPost);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchGetPostById(id));
  }, [dispatch, id]);

  console.log(statePost);

  return (
    <div>
      {statePost.status === "pending" && <p>loading bos..</p>}
      {statePost.status === "success" && (
        <div className="products_item">
          <h5>{statePost.data.text}</h5>
          <p>🩷 {statePost.data.likes}</p>
          <img src={statePost.data.image} alt={statePost.data.image} />
          <p>Updated on {convertUTCtoLocalDate(new Date(statePost.data.publishDate))}</p>
        </div>
      )}

      {statePost.status === "failed" && (
        <div>
          <p>someting went wrong</p>
          <p>{statePost.message}</p>
        </div>
      )}
      <Link to={"/"}>
        <button type="button">Back to the moon</button>
      </Link>
    </div>
  );
}

export default DetailPages;
