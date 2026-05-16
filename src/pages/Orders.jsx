import ordersData from '../data/orders.js';

function Orders() {
  return (
    <section className="orders-page container">
      <div className="section-heading">
        <span>Order history</span>
        <h2>Track your purchases</h2>
      </div>
      <div className="orders-list">
        {ordersData.map((order) => (
          <article key={order.id} className="order-card">
            <div>
              <h3>{order.id}</h3>
              <p>{order.date}</p>
            </div>
            <div>
              <span>{order.status}</span>
              <strong>${order.total.toFixed(2)}</strong>
            </div>
            <p>{order.items.join(', ')}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Orders;
