import { useState, useEffect} from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import "./style.scss"


export const Header = ({ favoriteList, setIsOpen, productList, setFilteredProductList }) => {
   const [value, setValue] = useState("")
   const [favoriteCount, setFavoriteCount] = useState(0)

   useEffect(() => {
      setFavoriteCount(favoriteList.length)
   }, [favoriteList])

   useEffect(() => {
      const filteredProducts = productList.filter(product =>
         product.name.toLowerCase().includes(value.toLowerCase())
      )
      setFilteredProductList(filteredProducts)
   }, [productList, value, setFilteredProductList])

   return (
      <header className="containerHeader">
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <div>
            <button className="buttonCart" onClick={() => setIsOpen(true)}>
                <MdShoppingCart size={21} />
                <span>{favoriteCount}</span>
            </button>
            <form >
               <input
                  type="text"
                  placeholder="Digitar Pesquisa"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
               />
               <button type="submit">
                 <MdSearch size={21} />
               </button>
            </form>
         </div>
      </header>
   );
};
