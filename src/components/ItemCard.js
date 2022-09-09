import React from 'react'
import {Button, Card, CardBody, CardHeader, CardText, CardTitle, CardFooter} from 'reactstrap'
import ItemCount from './ItemCount';

const ItemCard = (props) => {
  const {id, nombre, descripcion, img, precio, stock} = props;
  return (
    <div>
        <Card
  className="my-2"
  style={{
    width: '18rem'
  }}
>
  <CardHeader>
    
  </CardHeader>
  <img src={img} />
  <CardBody>
    <CardTitle tag="h5">
      {nombre}
    </CardTitle>
    <CardText>
      {descripcion}
    </CardText>
    <ItemCount stock = {stock}/>
  </CardBody>
  <CardFooter>
    Disponible: {stock} -
    USD {precio}
  </CardFooter>
</Card>
    </div>
  )
}

export default ItemCard