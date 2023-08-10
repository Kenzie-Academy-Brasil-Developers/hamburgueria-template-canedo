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
   const [isOpen, setIsOpen] = useState(false)
   const [filteredProductList, setFilteredProductList] = useState([]);


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
      if (!favoriteList.includes(productId)) {
         const newFavoriteList = [...favoriteList, productId];
         setFavoriteList(newFavoriteList);
         localStorage.setItem("@FavoriteList", JSON.stringify(newFavoriteList));
      }
   };

   const handleAddToCart = (productId) => {
      const productToAdd = productList.find(product => product.id === productId);
      const isProductInCart = cartList.some(item => item.id === productId);

      if (productToAdd && !isProductInCart) {
         setCartList([...cartList, productToAdd]);
      }
   };

   const handleSearch = (searchValue) => {
      const filteredProducts = productList.filter(product =>
         product.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setProductList(filteredProducts);
   };


   return (
      <>
          <Header favoriteList={favoriteList} setIsOpen={setIsOpen} productList={productList} handleSearch={handleSearch}  setFilteredProductList={setFilteredProductList}/>
         <main>
            <ProductList productList={filteredProductList}  handleFavoriteClick={handleFavoriteClick} handleAddToCart={handleAddToCart}/>
            <CartModal cartList={cartList} setCartList={setCartList} isOpen={isOpen} setIsOpen={setIsOpen}/>
         </main>
      </>
   );
};
