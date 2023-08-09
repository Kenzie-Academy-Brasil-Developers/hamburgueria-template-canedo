import { useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import  {api}  from "../../services/api.js";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const HomePage = () => {
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState([]);
   const [favoriteList, setFavoriteList] = useState([]);



   //"iniciar o componente"
    //Isso só aconteça na montagem
    // useEffect montagem - carrega os produtos da API e joga em productList
    useEffect(() => {
      const getProducts = async () => {
          try {
              const { data } = await api.get("/products");
              setProductList(data);
          } catch (error) {
              toast.error('error')
          }
      }
      getProducts();
  }, []); 


   const handleFavoriteClick = (productId) => {
      // Verifica se o item já está na lista de favoritos
      if (!favoriteList.includes(productId)) {
         const newFavoriteList = [...favoriteList, productId];
         setFavoriteList(newFavoriteList);
         localStorage.setItem("@FavoriteList", JSON.stringify(newFavoriteList));
          
      }
   };


   return (
      <>
         <Header favoriteList={favoriteList}/>
         <main>
            <ProductList productList={productList} handleFavoriteClick={handleFavoriteClick}/>
            {/* <CartModal cartList={cartList} /> */}
         </main>
      </>
   );
};
