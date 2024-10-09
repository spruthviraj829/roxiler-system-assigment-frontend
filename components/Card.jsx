import React, { useState } from 'react';

const truncateDescription = (description, maxWords) => {
  const words = description.split(' ');
  if (words.length <= maxWords) {
    return description;
  }
  return words.slice(0, maxWords).join(' ') + '...';
};

const ProductTable = ({ products }) => {
  const [expandedProductId, setExpandedProductId] = useState(null);

  const toggleDescription = (productId) => {
    setExpandedProductId(prevId => (prevId === productId ? null : productId));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Product Details</h2>
      <div className="overflow-y-auto h-[80vh]">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-4 mb-4 flex">
            <img
              src={product.image}
              alt={product.title}
              className="w-32 h-32 object-cover rounded-md mr-4"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{product.title}</h3>
              <p className="text-gray-600">Category: {product.category}</p>
              <p className="text-gray-600">
                {expandedProductId === product.id
                  ? product.description
                  : truncateDescription(product.description, 15)}
                {product.description.split(' ').length > 15 && (
                  <span
                    onClick={() => toggleDescription(product.id)}
                    className="text-blue-500 cursor-pointer ml-1"
                  >
                    {expandedProductId === product.id ? ' Click Less' : ' Click More'}
                  </span>
                )}
              </p>
              <p className="font-semibold mt-2">${product.price.toFixed(2)}</p>
              <p className="mt-1">{product.sold ? 'Sold: Yes' : 'Sold: No'}</p>
              <p className="text-gray-500 text-sm">{new Date(product.dateOfSale).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductTable;
