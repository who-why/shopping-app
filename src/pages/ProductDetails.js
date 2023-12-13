import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  console.log(product);

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  const { price, description, image, title } = product;

  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center bg-gray-100">
      <div className="container mx-auto flex">
        {/* Image Section */}
        <div className="flex-1 justify-center items-center">
          <img
            className="max-w-[300px] lg:max-w-[400px] rounded-lg"
            src={image}
            alt=""
          />
        </div>

        {/* Details Section */}
        <div className="flex-1 text-left ml-12">
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <div className="text-xl text-red-500 font-medium mb-4">${price}</div>
          <p className="text-gray-700 mb-6">{description}</p>
          <div className="space-x-4">
            <button
              onClick={() => addToCart(product, product.id)}
              className="bg-primary py-3 px-6 text-white rounded-md hover:bg-primary-dark"
            >
              Add to Cart
            </button>
            <Link to="/" className="bg-gray-300 py-3 px-6 text-gray-700 rounded-md hover:bg-gray-400">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
