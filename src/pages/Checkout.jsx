import { useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext.jsx';

function Checkout() {
  const { cart, cartTotal, clearCart } = useShop();
  const navigate = useNavigate();

  const handleOrder = () => {
    clearCart();
    navigate('/orders');
  };

  return (
    <section className="checkout-page container">
      <div className="section-heading">
        <span>Checkout</span>
        <h2>Complete your order</h2>
      </div>
      {cart.length === 0 ? (
        <div className="empty-state">
          <h3>Your cart is empty</h3>
          <p>Add products before finalizing your purchase.</p>
        </div>
      ) : (
        <div className="checkout-grid">
          <div className="checkout-form card-panel">
            <h3>Customer details</h3>
            <label>
              Full name
              <input type="text" placeholder="Alex Johnson" />
            </label>
            <label>
              Email address
              <input type="email" placeholder="alex@example.com" />
            </label>
            <label>
              Shipping address
              <input type="text" placeholder="123 Luna Avenue" />
            </label>
            <label>
              Payment method
              <select>
                <option value="card">Credit card</option>
                <option value="paypal">PayPal</option>
              </select>
            </label>
          </div>
          <aside className="checkout-summary card-panel">
            <h3>Order summary</h3>
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  <span>{item.quantity} × {item.name}</span>
                  <strong>${(item.quantity * item.price).toFixed(2)}</strong>
                </li>
              ))}
            </ul>
            <div className="summary-total">
              <span>Total</span>
              <strong>${cartTotal.toFixed(2)}</strong>
            </div>
            <button type="button" className="button-primary" onClick={handleOrder}>
              Place order
            </button>
          </aside>
        </div>
      )}
    </section>
  );
}

export default Checkout;
