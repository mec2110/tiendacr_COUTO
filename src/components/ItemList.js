import Items from "./Items";

const ItemList = ({items}) =>{
   return (
        <div>
          
          {items.map (product => {
          <item key={product.id} items={product}/>
           }
           )} 
        </div>
    );
}

export default ItemList;