import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../asyncmockCoffee"

const ItemListContainer = ({greeting}) => {
  const [listProducts, setListaProductos]= useState([])
  const[mensaje, setMensaje] = useState(false)
  const [loading, setLoading] = useState(true)
  
  useEffect(()=>{
    getProducts().then((res)=> setListaProductos(res))
    .catch(()=> setMensaje('error'))
    .finally(()=> setLoading(false))
  }, [])


  return (
    <div>
      <h2>{greeting}</h2>
      {mensaje && <p>{mensaje}</p>}
       {loading ? <p>loading...</p>  : <ItemList products={listProducts}/>}
    </div>
  )
}

export default ItemListContainer