import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CountFuntion from '../CountFunction/CountFunction';
//import { useState } from 'React' ;


const Item = ({...products}) => {

    //const[setMensaje] = useState(false)
    const { name, img, stock, description} = products

    //const onAdd = (cantidad) => {setMensaje (`Agregaste ${cantidad} productos`) }

  return (
    <>
    <div >
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        {/*<CountFuntion initial={1} stock={stock} />*/}
        <Button variant="dark">ver mas</Button>
      </Card.Body>
    </Card>
    </div>
    
    </>
  );
}

export default Item;