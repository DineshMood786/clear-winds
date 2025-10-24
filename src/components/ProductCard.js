import React  from "react";

function ProductCard({ product, isFavourite, onToggleFavourite }) {
    return (
        <div className="product-card">
            <h3>{product.title}</h3>
             <p>{product.body}</p>

             <button onClick={()=>onToggleFavourite(product.id)}>
{isFavourite ? "**Favourite" : "Mark Favourite"}
             </button>
        </div>
    )
}

export default ProductCard;