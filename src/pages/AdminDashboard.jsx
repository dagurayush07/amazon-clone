import { Link } from 'react-router-dom';
import dashboardData from '../data/dashboardData.js';

function AdminDashboard() {
  return (
    <section className="admin-page container">
      <div className="section-heading">
        <span>Admin dashboard</span>
        <h2>Business overview</h2>
      </div>
      <div className="admin-metrics-grid">
        {dashboardData.metrics.map((metric) => (
          <div key={metric.label} className="metric-card">
            <p>{metric.label}</p>
            <strong>{metric.value}</strong>
            <span>{metric.trend}</span>
          </div>
        ))}
      </div>
      <div className="admin-actions">
        <Link to="/admin/products" className="button-secondary">
          Manage products
        </Link>
        <Link to="/admin/orders" className="button-secondary">
          Order management
        </Link>
      </div>
      <div className="admin-table card-panel">
        <h3>Recent orders</h3>
        <table>
          <thead>
            <tr>
              <th>Order</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {dashboardData.recentOrders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.email}</td>
                <td>{order.amount}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default AdminDashboard;
