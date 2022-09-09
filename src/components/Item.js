import React from 'react'
import ItemCard from './ItemCard'

const Item = ({ productos }) => {

    return (


        <div className='col-4'>
            <ItemCard key={productos.id} nombre={productos.nombre} descripcion={productos.descripcion} img={productos.img} precio={productos.precio} cantidad={productos.cantidad} stock={productos.stock} />
        </div>


    )
}

export default Item