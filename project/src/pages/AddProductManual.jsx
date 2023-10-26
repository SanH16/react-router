import React from "react";
import { Link } from "react-router-dom";

function AddProductManual() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);

    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData);
    console.log(values);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="title" />
        <input type="number" name="price" placeholder="price" />
        <input type="text" name="description" placeholder="description" />

        <div>
          <label htmlFor="category">Smartphone</label>
          <input type="checkbox" name="category" id="category" value="Smartphone" />
        </div>
        <div>
          <label htmlFor="souvenir">Souvernir</label>
          <input type="checkbox" name="category" id="souvenir" value="Souvernir" />
        </div>

        <button type="submit">send</button>
        <button type="reset">reset</button>
      </form>

      <Link to="/">
        <button type="button">Back to home</button>
      </Link>
    </>
  );
}

export default AddProductManual;
