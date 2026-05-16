import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useShop } from '../context/ShopContext.jsx';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, addToCart, toggleWishlist, wishlist } = useShop();

  const product = useMemo(
    () => products.find((item) => String(item.id) === id),
    [id, products]
  );
  if (!product) {
    return (
      <div className="container not-found-page">
        <h2>Product not found</h2>
        <button className="button-secondary" type="button" onClick={() => navigate('/shop')}>
          Return to shop
        </button>
      </div>
    );
  }

  const isWished = wishlist.some((item) => item.id === product.id);
  const reviewCount =
    Array.isArray(product.reviews) ? product.reviews.length :
    typeof product.reviews === 'number' ? product.reviews : 0;

  return (
    <section className="product-details container">
      <div className="details-grid">
        <div className="details-image" style={{ backgroundImage: `url(${product.image})` }} />
        <div className="details-info">
          <span className="label">{product.badge || 'Featured'}</span>
          <h1>{product.name}</h1>
          <p className="details-category">{product.category}</p>
          <div className="details-rating">
            <span>{product.rating.toFixed(1)}</span>
            <i className="fa-solid fa-star" aria-hidden="true" />
            <small>({reviewCount} reviews)</small>
          </div>
          <div className="details-price">
            <strong>${product.price}</strong>
            {product.discount > 0 && <span>{product.discount}% off</span>}
          </div>
          <p className="details-description">{product.description}</p>
          <ul className="details-list">
            {(product.details || []).map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
          <div className="details-actions">
            <button type="button" className="button-primary" onClick={() => addToCart(product)}>
              Add to cart
            </button>
            <button type="button" className={`button-secondary ${isWished ? 'active' : ''}`} onClick={() => toggleWishlist(product)}>
              {isWished ? 'Remove wishlist' : 'Add wishlist'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
