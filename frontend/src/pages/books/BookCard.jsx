import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { getImgUrl } from '../../utils/getImgUrl';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';

const BookCard = ({ book }) => {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    const discount = Math.round(((book?.oldPrice - book?.newPrice) / book?.oldPrice) * 100);

    return (
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl p-4 transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                {/* Image Section */}
                <div className="relative group sm:w-48">
                    <Link to={`/books/${book._id}`}>
                        <img
                            src={getImgUrl(book?.coverImage)}
                            alt={book?.title}
                            className="w-full h-64 sm:h-72 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                        />
                        {discount > 0 && (
                            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
                                -{discount}%
                            </div>
                        )}
                    </Link>
                </div>

                {/* Content Section */}
                <div className="flex-1 space-y-4">
                    <Link to={`/books/${book._id}`}>
                        <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200">
                            {book?.title}
                        </h3>
                    </Link>

                    <p className="text-gray-600">
                        {book?.description.length > 80 
                            ? `${book.description.slice(0, 80)}...` 
                            : book?.description}
                    </p>

                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-blue-600">
                            ₹{book?.newPrice}
                        </span>
                        {book?.oldPrice && (
                            <span className="text-gray-400 line-through">
                                ₹{book?.oldPrice}
                            </span>
                        )}
                    </div>

                    <button 
                        onClick={() => handleAddToCart(book)}
                        className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200"
                    >
                        <FiShoppingCart className="text-xl" />
                        <span>Add to Cart</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookCard;