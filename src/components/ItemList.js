import React from 'react'
import Item from './Item'
import ItemCard from './ItemCard'

const ItemList = ({Productos} = []) => {
  return (
    <div className='row'>
        {

            Productos.map((Productos) => {

              return <Item productos={Productos} key={Productos.id}/>
              
            }
            )

        }
    </div>
  
  
  )
}

export default ItemList