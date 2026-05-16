import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext.jsx';

function Cart() {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useShop();

  return (
    <section className="cart-page container">
      <div className="section-heading">
        <span>Shopping Cart</span>
        <h2>Review your selections</h2>
      </div>

      {cart.length === 0 ? (
        <div className="empty-state">
          <h3>Your cart is empty</h3>
          <p>Browse products to add premium items to your cart.</p>
          <Link to="/shop" className="button-primary">
            Start shopping
          </Link>
        </div>
      ) : (
        <div className="cart-grid">
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-image" style={{ backgroundImage: `url(${item.image})` }} />
                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p>{item.category}</p>
                  <div className="quantity-control">
                    <button type="button" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>
                <div className="cart-meta">
                  <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                  <button type="button" className="text-button" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <aside className="cart-summary">
            <div className="summary-card">
              <h3>Order summary</h3>
              <p>Items total</p>
              <strong>${cartTotal.toFixed(2)}</strong>
              <Link to="/checkout" className="button-primary">
                Proceed to checkout
              </Link>
            </div>
          </aside>
        </div>
      )}
    </section>
  );
}

export default Cart;
