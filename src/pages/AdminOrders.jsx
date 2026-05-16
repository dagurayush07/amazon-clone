import ordersData from '../data/orders.js';

function AdminOrders() {
  return (
    <section className="admin-page container">
      <div className="section-heading">
        <span>Orders manager</span>
        <h2>View and manage recent orders</h2>
      </div>
      <div className="card-panel admin-orders-list">
        <table>
          <thead>
            <tr>
              <th>Order</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total</th>
              <th>Items</th>
            </tr>
          </thead>
          <tbody>
            {ordersData.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.date}</td>
                <td>{order.status}</td>
                <td>${order.total.toFixed(2)}</td>
                <td>{order.items.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default AdminOrders;
