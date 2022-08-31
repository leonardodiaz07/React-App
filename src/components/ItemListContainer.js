import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard'

const Productos = [
    {
        'id': 1,
        'nombre': 'Notebook Asus VivoBook',
        'descripcion': 'Notebook Asus VivoBook',
        'img': './img/Producto1.png',
        'precio': 1200,
        'stock': 5
    },
    {
        'id': 2,
        'nombre': 'Notebook Asus VivoBook',
        'descripcion': 'Notebook Asus VivoBook',
        'img': './img/Producto1.png',
        'precio': 1200,
        'stock': 20
    },
    {
        'id': 3,
        'nombre': 'Notebook Asus VivoBook',
        'descripcion': 'Notebook Asus VivoBook',
        'img': './img/Producto1.png',
        'precio': 1200,
        'stock': 10
    },
    {
        'id': 4,
        'nombre': 'Notebook Asus VivoBook',
        'descripcion': 'Notebook Asus VivoBook',
        'img': './img/Producto1.png',
        'precio': 1200,
        'stock': 15
    },
    {
        'id': 5,
        'nombre': 'Notebook Asus VivoBook',
        'descripcion': 'Notebook Asus VivoBook',
        'img': './img/Producto1.png',
        'precio': 1200,
        'stock': 7
    },
    {
        'id': 6,
        'nombre': 'Notebook Asus VivoBook',
        'descripcion': 'Notebook Asus VivoBook',
        'img': './img/Producto1.png',
        'precio': 1200,
        'stock': 28
    },
]


const ItemListContainer = () => {

    const [data, setData] = useState ([])
    const [loading, setLoading] = useState(true)
  
const getData = () => {
const error = false    
    return new Promise((resolve , reject) => {
        setTimeout(()=>{
            if(!error) {
                resolve(Productos)
            } else {
                reject("Hubo un error")
            }
        }, 5000)
    })
}

useEffect(() => {
    getData()
    .then(res => {
        setData(res);
        setLoading(false)
    })
    .catch(error => (error))
}, [])



  return (

    <>
    
    {
        loading ?
        <Spinner>
            Loading...
        </Spinner>
    }
    
    <div className='row'>
        {

            data.map(productos => (

              <div className='col-4'>
                  <ItemCard key = {productos.id} nombre = {productos.nombre} descripcion = {productos.descripcion} img = {productos.img} precio = {productos.precio} cantidad = {productos.cantidad} stock = {productos.stock} />
              </div>
              

            ))

        }
    </div>
  
  )
</>
}


export default ItemListContainer