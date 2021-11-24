const ItemListContainer =({greeting})=>
{
  const style = {
    color : "aquamarine",
    padding: 15,
    fontSize: 30,
  }

    return (
      <div style ={style}>{greeting}
      </div>
    )
  }

  export default ItemListContainer;

 /* function ItemListContainer (props){
    return <h2>I am a { props.brand }!</h2>;
  }*/