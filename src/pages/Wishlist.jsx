import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext.jsx';

function Wishlist() {
  const { wishlist } = useShop();

  return (
    <section className="wishlist-page container">
      <div className="section-heading">
        <span>Wishlist</span>
        <h2>Your saved favorites</h2>
      </div>

      {wishlist.length === 0 ? (
        <div className="empty-state">
          <h3>No items saved yet</h3>
          <p>Add products to your wishlist while browsing the shop.</p>
          <Link to="/shop" className="button-primary">
            Browse products
          </Link>
        </div>
      ) : (
        <div className="grid product-grid">
          {wishlist.map((product) => (
            <article key={product.id} className="product-card">
              <div className="product-image" style={{ backgroundImage: `url(${product.image})` }} />
              <div className="product-body">
                <h3>{product.name}</h3>
                <p>{product.category}</p>
                <strong>${product.price}</strong>
                <Link to={`/product/${product.id}`} className="button-secondary">
                  View details
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default Wishlist;
