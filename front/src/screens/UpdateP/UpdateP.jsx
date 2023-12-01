import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UpdateP.css'

const UpdateP = () => {
  const { pid } = useParams();
  const [productSelect, setProductSelect] = useState(null);
  const [updatedData, setUpdatedData] = useState({
    descripcion: '',
    precio: 0,
    stock: 0,
    type: '',
  });

  useEffect(() => {
    fetch(`http://localhost:3040/api/products/${pid}`)
      .then((res) => res.json())
      .then((result) => setProductSelect(result.product))
      .catch((error) => console.error('Error fetching product:', error));
  }, [pid]);

  const handleFieldChange = (field, value) => {
    setUpdatedData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:3040/api/products/${pid}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      const result = await response.json();

      if (result.ok) {
        console.log('Product updated successfully');
      } else {
        console.error('Error updating product:', result.error);
      }
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div className='update-container'>
      <div className='update-product-card'>
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
      </div>

      {productSelect && (
        <div className='update-right'>
          <h2>{productSelect.descripcion}</h2>
          <form className='update-form'>
            <label>Description:</label>
            <input
              type='text'
              value={updatedData.descripcion}
              onChange={(e) => handleFieldChange('descripcion', e.target.value)}
            />
            <label>Price:</label>
            <input
              type='number'
              value={updatedData.precio}
              onChange={(e) => handleFieldChange('precio', parseFloat(e.target.value))}
            />
            <label>Stock:</label>
            <input
              type='number'
              value={updatedData.stock}
              onChange={(e) => handleFieldChange('stock', parseInt(e.target.value))}
            />
            <label>Type:</label>
            <input
              type='text'
              value={updatedData.type}
              onChange={(e) => handleFieldChange('type', e.target.value)}
            />
            <button className='update-button' type='button' onClick={handleUpdate}>
              Update Product
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateP;
