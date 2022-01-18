import Item from "./Item";

const ItemList = ({ products }) => {
  return (

    <div>
      <ul>{products.map
        (product => <Item key={product.id} product={product} />)
      }
      </ul>
    </div>

  );
}

export default ItemList