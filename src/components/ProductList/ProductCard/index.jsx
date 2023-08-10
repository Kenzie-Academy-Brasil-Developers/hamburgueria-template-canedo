export const ProductCard = ({ product,handleFavoriteClick, handleAddToCart }) => {
    return(
        <li>
            <img src={product.img} alt={product.name} />
            <div>
                <h3 className="title1">{product.name}</h3>
                <span className="title2">{product.category}</span>
                <span className="title3">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button className="title2" onClick={() => { 
                    handleFavoriteClick(product.id);
                    handleAddToCart(product.id);
                    }}>Adicionar
                </button>
            </div>
        </li>
    )
}