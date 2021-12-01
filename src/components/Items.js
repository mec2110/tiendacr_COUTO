

const Item= ({product}) => {
    return(
      <div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <p><img src={product.img} alt={product.name} className="itemImg"/></p>
        <button> Ver detalle</button>
      </div>
    );
    
  }
  
export default Item;