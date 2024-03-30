// ProductsList.js
import React from 'react';
import ProductCard from './ProductCard';
import { Row, Col } from 'react-bootstrap';


const ProductsList = ({ products }) => {
  return (
    <div className="products-list-container" style={{padding : '15px'}}>
      <Row xs={1} md={3} className="g-4">
        {products.map(product => (
          <Col key={product.id} style={{marginHorizontal : '15px'}}>
            <ProductCard
              name={product.name}
              plu={product.plu}
              category={product.ProductCategory.name}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductsList;
