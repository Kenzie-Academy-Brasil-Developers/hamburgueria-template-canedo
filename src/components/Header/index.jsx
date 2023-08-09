import { useState, useEffect} from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import { CartModal } from "../CartModal";


export const Header = ({ favoriteList }) => {
   const [value, setValue] = useState("");
   const [isOpen, setIsOpen] = useState(false)
   const [favoriteCount, setFavoriteCount] = useState(0);
   

   useEffect(() => {
      setFavoriteCount(favoriteList.length);
   }, [favoriteList]);

   return (
      <header>
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <div>
            <button onClick={() => setIsOpen(true)}>
                <MdShoppingCart size={21} />
                <span>{favoriteCount}</span>
            </button>
            <form>
               <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
               />
               <button type="submit">
                 <MdSearch size={21} />
               </button>
            </form>
         </div>
         {isOpen ? <CartModal setIsOpen={setIsOpen} cartList={[]} /> : null}
      </header>
   );
};
