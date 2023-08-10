import { ProductCard } from "./ProductCard";
import "./style.scss"

export const ProductList = ({ productList, handleFavoriteClick, handleAddToCart }) => {
   return (
      <ul className="productList">
         {productList.map((product) => (
            <ProductCard key={product.id} product={product} handleFavoriteClick={handleFavoriteClick} handleAddToCart={handleAddToCart}/>
         ))}
      </ul>
   );
};
