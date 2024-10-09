/* eslint-disable react/prop-types */
import { useState } from 'react';
import './ProductTable.css'; 

const truncateDescription = (description, maxWords) => {
  const words = description.split(' ');
  if (words.length <= maxWords) {
    return description; 
  }
  return words.slice(0, maxWords).join(' ') + '...'; 
};

const ProductTable = ({ products }) => {
  const [expandedProductId, setExpandedProductId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const totalPages = Math.ceil(products.length / productsPerPage);

 
  const toggleDescription = (productId) => {
    setExpandedProductId((prevId) => (prevId === productId ? null : productId));
  };


  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="container">
      <h2>Product Details</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Image</th>
            <th>Date of Sale</th>
            <th>Description</th>
            <th>Month of Sale</th>
            <th>Price</th>
            <th>Sold</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.category}</td>
              <td>
                <img src={product.image} alt={product.title} style={{ width: '50px', height: 'auto' }} />
              </td>
              <td>
                {new Date(product.dateOfSale).toLocaleDateString()}
              </td>
              <td>
                {expandedProductId === product.id
                  ? product.description 
                  : truncateDescription(product.description, 15) 
                }
                {product.description.split(' ').length > 15 && (
                  <span
                    onClick={() => toggleDescription(product.id)}
                    style={{ color: 'blue', cursor: 'pointer', marginLeft: '8px' }}
                  >
                    {expandedProductId === product.id ? 'Click Less' : 'Click More'}
                  </span>
                )}
              </td>
              <td>{product.monthOfSale}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.sold ? 'Yes' : 'No'}</td>
              <td>{product.title}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {}
      <div className="pagination">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductTable;
