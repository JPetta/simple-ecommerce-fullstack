// ProductCard.js
import React from 'react';
import { Card } from 'react-bootstrap';

const ProductCard = ({ name, plu, category }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>PLU: {plu}</Card.Text>
        <Card.Text>Category: {category}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
