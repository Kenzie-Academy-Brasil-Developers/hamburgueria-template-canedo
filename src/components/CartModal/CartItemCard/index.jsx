import { MdDelete } from "react-icons/md";
import "./style.scss"

export const CartItemCard = ({ product, onRemoveClick }) => {
   return (
      <li>
         <div>
            <img src={product.img} alt={product.name} />
            <h3 className="modalText1">{product.name}</h3>
         </div>
         <button aria-label="delete" title="Remover item"onClick={() => onRemoveClick(product.id)}>
            <MdDelete size={21} />
         </button>
      </li>
   );
};
