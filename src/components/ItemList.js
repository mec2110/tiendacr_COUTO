import Item from "./Item";

const ItemList = ({products,category}) =>{
  console.log(category)
   return (
        <ul>
          
          {products.map
          (product => <Item key={product.id} product={product}/>)
          } 
        </ul>
    );
}

export default ItemList