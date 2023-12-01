import React, { useEffect, useState } from 'react';
import { ProductCard } from '../../Components';

const Delete = () => {
  const [products, setProducts] = useState([]);
  const [filteredTypes, setFilteredTypes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3040/api/products')
      .then((res) => res.json())
      .then((result) => setProducts(result.products));
  }, []);



  const handleDeleteClick = (productId) => {
    setSelectedProductId(productId);
  };

  const handleConfirmDelete = async () => {
    if (selectedProductId) {
      try {
        const response = await fetch(`http://localhost:3040/api/products/${selectedProductId}`, {
          method: 'DELETE',
        });
  
        if (response.ok) {
          const updatedProducts = await response.json();
          setProducts(updatedProducts.products);
          console.log('Product Deleted Correctly');
        } else {
          console.error('Failed to delete product');
        }
      } catch (error) {
        console.error('Error during product deletion:', error);
      } finally {
        setSelectedProductId(null); 
      }
    }
  };
  

  const handleCancelDelete = () => {
    setSelectedProductId(null);
  };

  const filteredProducts = products.filter((product) => {
    const typeMatches =
      filteredTypes.length === 0 || filteredTypes.includes(product.type);
    const nameMatches = product.nombre.toLowerCase().includes(searchQuery.toLowerCase());
    return typeMatches && nameMatches;
  });

  return (
    <div className="home-page-container">
      <div className="filter-box-container">
      </div>
      <div className="home-page-wrapper">
        <div className="home-page">
          {filteredProducts.map((product) => (
            <div key={product._id} className="product-card">
              <ProductCard product={product} />
              <button onClick={() => handleDeleteClick(product._id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>

      {selectedProductId && (
        <div className="confirmation-dialog">
          <p>Are you sure you want to delete this product?</p>
          <button onClick={handleConfirmDelete}>Yes</button>
          <button onClick={handleCancelDelete}>No</button>
        </div>
      )}
    </div>
  );
};

export default Delete;
