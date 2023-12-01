import React, { useState } from 'react';
import './Add.css'; 

const Add = () => {
  const [productData, setProductData] = useState({
    nombre: '',
    precio: '',
    stock: '',
    descripcion: '',
    thumbnail: null, 
    type: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProductData({ ...productData, thumbnail: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('thumbnail', productData.thumbnail);
      formData.append('nombre', productData.nombre);
      formData.append('precio', productData.precio);
      formData.append('stock', productData.stock);
      formData.append('descripcion', productData.descripcion);
      formData.append('type', productData.type);

      const response = await fetch('http://localhost:3040/api/products', {
        method: 'POST',
        body: formData, 
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Product created successfully:', data);
      } else {
        console.error('Failed to create product:', data.error);
      }
    } catch (error) {
      console.error('Error during product creation:', error);
    }
  };

  return (
    <form className="add-form" onSubmit={handleSubmit} encType="multipart/form-data">
      <label className="form-label">
        Name:
        <input type="text" className="form-input" name="nombre" value={productData.nombre} onChange={handleInputChange} />
      </label>
      <label className="form-label">
        Price:
        <input type="text" className="form-input" name="precio" value={productData.precio} onChange={handleInputChange} />
      </label>
      <label className="form-label">
        Stock:
        <input type="text" className="form-input" name="stock" value={productData.stock} onChange={handleInputChange} />
      </label>
      <label className="form-label">
        Description:
        <input type="text" className="form-input" name="descripcion" value={productData.descripcion} onChange={handleInputChange} />
      </label>
      {}
      <label className="form-label">
        Thumbnail:
        <input type="file" className="form-input" name="thumbnail" onChange={handleFileChange} />
      </label>
      <label className="form-label">
        Type:
        <input type="text" className="form-input" name="type" value={productData.type} onChange={handleInputChange} />
      </label>
      <button type="submit" className="form-button">Create Product</button>
    </form>
  );
};

export default Add;