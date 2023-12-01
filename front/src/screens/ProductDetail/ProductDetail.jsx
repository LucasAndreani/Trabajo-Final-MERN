import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
    const { pid } = useParams();
    const [productSelect, setProductSelect] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3040/api/products/${pid}`)
            .then(res => res.json())
            .then(result => setProductSelect(result.product))
            .catch(error => console.error('Error fetching product:', error));
    }, [pid]);

    return (
        <div className='detail-container'>
            <div className='detail-product-card'>
                {productSelect && productSelect.thumbnail ? (
                    <img
                        src={`http://localhost:3040/${productSelect.thumbnail}`}
                        alt={productSelect.nombre}
                        width={'150px'}
                        onError={(e) => {
                            e.target.onerror = null; 
                            e.target.src = 'fallback-image-url'; 
                        }}
                    />
                ) : (
                    <div className="fallback-image">No Image</div>
                )}
                {productSelect && (
                    <>
                        <h3>{productSelect.nombre}</h3>
                        <p>Type: {productSelect.type}</p>
                        <p>Price: ${productSelect.precio}</p>
                        <p>Stock: {productSelect.stock}</p>
                    </>
                )}
                <NavLink to={`/UpdateP/${pid}`}>
                        <button>Edit</button>
                    </NavLink>
            </div>

            {productSelect && (
                <div className='detail-right'>
                    
                    <h2>{productSelect.descripcion}</h2>
                    
                </div>
                
            )}
            
        </div>
    );
};

export default ProductDetail;