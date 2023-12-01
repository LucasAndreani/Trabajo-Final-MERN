import React from 'react';
import { NavLink } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <NavLink to={`/product/${product._id}`} className={`product-box ${product.type ? product.type.toLowerCase() : ''}`}>
      <div className="inner-box">
        {product.thumbnail && (
          <img src={`http://localhost:3040/${product.thumbnail}`} alt={product.nombre} width={'100px'} height={'108px'}/>

        )}
        <h3 className="name" >{product.nombre}</h3>
        <p className="type">Type: {product.type}</p>
        <p className="price">Price: ${product.precio}</p>
      </div>
    </NavLink>
  );
};

export default ProductCard;