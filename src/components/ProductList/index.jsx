import { ProductCard } from "./ProductCard";

export const ProductList = ({ productList, handleFavoriteClick }) => {
   return (
      <ul>
         {productList.map((product) => (
            <ProductCard key={product.id} product={product} handleFavoriteClick={handleFavoriteClick}/>
         ))}
      </ul>
   );
};
