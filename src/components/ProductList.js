import React from "react";
import ProductCard from "./ProductCard";
import "../css/ProductList.css";

function ProductList({ products, favourites, onToggleFavourite }) {
  return (
    <div className="product-list">
      <table className="product-table">
        <thead className="table-head">
          <th>ID</th>
          <th>TITLE</th>
          <th>BODY</th>
          <th>Action</th>
        </thead>
        <tbody>
          {products.map((product) => {
            const isFavourite = favourites.includes(product.id);
            return (
              <tr className="product-card">
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.body}</td>

                <td>
                  {" "}
                  <button
                    className="favourite-btn"
                    onClick={() => onToggleFavourite(product.id)}
                  >
                    {isFavourite ? "**Favourite" : "Mark Favourite"}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
