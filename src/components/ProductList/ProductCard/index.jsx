export const ProductCard = ({ product,handleFavoriteClick }) => {
    return(
        <li>
            <img src={product.img} alt={product.name} />
            <div>
                <h3>{product.name}</h3>
                <span>{product.category}</span>
                <span>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button onClick={() => handleFavoriteClick(product.id)}>Adicionar</button>
            </div>
        </li>
    )
}