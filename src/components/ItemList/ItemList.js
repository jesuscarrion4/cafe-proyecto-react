import React from 'react'
import Item from '../Item/Item'

const ItemList = ({products}) => {
  return (
    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap'}}>
      {products.map(products => <Item key={products.id} {...products}/>)}

    </div>
    
  )
}

export default ItemList