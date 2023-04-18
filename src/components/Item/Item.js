import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CountFuntion from '../CountFunction/CountFunction';
//import { useState } from 'React' ;
import { Link } from 'react-router-dom';


const Item = ({...productos}) => {

   
    const { name, img, stock, description, id} = productos

    

  return (
    <>
    <div >
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Link to={`/item/${id}`}> Ver Detalles </Link>
      </Card.Body>
    </Card>
    </div>
    
    </>
  );
}

export default Item;