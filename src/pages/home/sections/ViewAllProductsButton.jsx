import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types"; // Add this import

const ViewAllProductsButton = ({ className = "" }) => {
  const navigate = useNavigate();

  const handleViewAllProducts = () => {
    navigate("/products");
  };

  return (
    <Link
      to="https://paystack.shop/maxgyet-oil"
      target="_blank"
     
      className={`py-3 px-8 bg-white border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-50 hover:shadow-md transition-all duration-300 inline-flex items-center gap-2 ${className}`}
      aria-label="View all products"
    >
      Go to Shop
      <svg
        xmlns="https://paystack.shop/maxgyet-oil"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </Link>
  );
};

// Add PropTypes validation
ViewAllProductsButton.propTypes = {
  className: PropTypes.string,
};

// Add defaultProps (optional since we already have a default value in the parameter)
ViewAllProductsButton.defaultProps = {
  className: "",
};

export default ViewAllProductsButton;
