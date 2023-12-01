import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Products.css';
import { ProductCard } from '../../Components';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredTypes, setFilteredTypes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('http://localhost:3040/api/products')
      .then((res) => res.json())
      .then((result) => setProducts(result.products));
  }, []);

  const allProductTypes = Array.from(new Set(products.flatMap((product) => product.type)));

  const handleFilterChange = (type) => {
    if (filteredTypes.includes(type)) {
      setFilteredTypes(filteredTypes.filter((t) => t !== type));
    } else {
      setFilteredTypes([...filteredTypes, type]);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
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
        <div className="filter-box">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search by product name..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          <h3>Filter by Type:</h3>
          {allProductTypes.map((type) => (
            <label key={type}>
              <input
                type="checkbox"
                checked={filteredTypes.includes(type)}
                onChange={() => handleFilterChange(type)}
              />
              {type}
            </label>
          ))}
        </div>
      </div>
      <div className="home-page-wrapper">
        <div className="home-page">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
      <NavLink to="/Add">
      <button className='ad-button'>Add Pokémon</button>
      </NavLink>
      <NavLink to='/Delete'>
      <button className='d-button'>Delete Pokémon</button>
      </NavLink>
    </div>
  );
};

export default Products;