import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import "./style.scss"


export const CartModal = ({ cartList, setCartList, isOpen, setIsOpen }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   
   const handleRemoveAll = () => {
      setCartList([])
   };

   const handleRemoveItem = (productId) => {
      const updatedCart = cartList.filter(item => item.id !== productId);
      setCartList(updatedCart)
   };
   

   return (
      <section className={`modalOverlay ${isOpen ? "" : "modalHidden"}`}>
         <div role="dialog" className="containerModal">
            <div className="modalBox modalText1">
               <h2>Carrinho de compras</h2>
               <button className="closeButton" aria-label="close" title="Fechar"  onClick={() => setIsOpen(false)}>
                  <MdClose size={21} />
               </button>
            </div>
            <div>
               <ul>
                  {cartList.map((product) => (
                     <CartItemCard key={product.id} product={product} onRemoveClick={handleRemoveItem}/>
                     ))}
               </ul>
            </div>
            <div className="divAllValue">
               <div >
                  <span className="modalText3">Total</span>
                  <span className="modalText4">{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
               </div>
               <button className="modalText2" onClick={handleRemoveAll}>Remover todos</button>
            </div>
         </div>
      </section>
   );
};
