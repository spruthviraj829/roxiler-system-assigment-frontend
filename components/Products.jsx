/* eslint-disable react/prop-types */
import { useState } from 'react';

// Utility function to truncate description
const truncateDescription = (description, maxWords) => {
  const words = description.split(' ');
  if (words.length <= maxWords) {
    return description; // Return original description if within limit
  }
  return words.slice(0, maxWords).join(' ') + '...'; // Truncate and add ellipsis
};

const ProductTable = ({ products }) => {
  const [expandedProductId, setExpandedProductId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const totalPages = Math.ceil(products.length / productsPerPage);

  // Function to toggle the expanded description
  const toggleDescription = (productId) => {
    setExpandedProductId((prevId) => (prevId === productId ? null : productId));
  };

  // Pagination logic
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
    <div style={{ padding: '20px' }} className="w-full">
      <h2 className="text-2xl mb-4">Product Details</h2>
      <table className="w-full border border-collapse border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Category</th>
            <th className="border border-gray-300 p-2">Image</th>
            <th className="border border-gray-300 p-2">Date of Sale</th>
            <th className="border border-gray-300 p-2">Description</th>
            <th className="border border-gray-300 p-2">Month of Sale</th>
            <th className="border border-gray-300 p-2">Price</th>
            <th className="border border-gray-300 p-2">Sold</th>
            <th className="border border-gray-300 p-2">Title</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((product) => (
            <tr key={product.id}>
              <td className="border border-gray-300 p-2">{product.id}</td>
              <td className="border border-gray-300 p-2">{product.category}</td>
              <td className="border border-gray-300 p-2">
                <img src={product.image} alt={product.title} className="w-12 h-auto" />
              </td>
              <td className="border border-gray-300 p-2">
                {new Date(product.dateOfSale).toLocaleDateString()}
              </td>
              <td className="border border-gray-300 p-2">
                {expandedProductId === product.id
                  ? product.description // Show full description if expanded
                  : truncateDescription(product.description, 15) // Truncate if not expanded
                }
                {product.description.split(' ').length > 15 && (
                  <span
                    onClick={() => toggleDescription(product.id)}
                    className="text-blue-500 cursor-pointer ml-2"
                  >
                    {expandedProductId === product.id ? 'Click Less' : 'Click More'}
                  </span>
                )}
              </td>
              <td className="border border-gray-300 p-2">{product.monthOfSale}</td>
              <td className="border border-gray-300 p-2">${product.price.toFixed(2)}</td>
              <td className="border border-gray-300 p-2">{product.sold ? 'Yes' : 'No'}</td>
              <td className="border border-gray-300 p-2">{product.title}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination controls */}
      <div className="flex justify-between items-center mt-4 bg-gray-200 p-4 rounded-md shadow-md">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 shadow-sm disabled:opacity-50 transition duration-200 ease-in-out"
        >
          Previous
        </button>
        <span className="font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 shadow-sm disabled:opacity-50 transition duration-200 ease-in-out"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductTable;
