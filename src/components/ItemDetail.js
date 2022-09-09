import React from 'react'

const ItemDetail = ({Item}) => {
  return (
    <div className='container'>
        <img src={Item.img} alt=""/>
        <h3>{Item.nombre}</h3>
        <p>{Item.descripcion}</p>
        <p>{Item.stock}</p>
        <h4>{Item.precio}</h4>
        <button>Agregar al Carrito</button>
    </div>
  )
}

export default ItemDetail