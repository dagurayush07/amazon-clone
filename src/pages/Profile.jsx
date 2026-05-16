import { Link } from 'react-router-dom';

function Profile() {
  return (
    <section className="profile-page container">
      <div className="profile-panel">
        <div className="section-heading">
          <span>Account</span>
          <h2>Profile overview</h2>
        </div>
        <div className="profile-grid">
          <div className="card-panel profile-card">
            <h3>Personal details</h3>
            <p><strong>Name:</strong> Lina Mason</p>
            <p><strong>Email:</strong> lina.mason@example.com</p>
            <p><strong>Member since:</strong> Jan 2025</p>
            <Link to="/orders" className="button-secondary">
              View order history
            </Link>
          </div>
          <div className="card-panel profile-stats">
            <div>
              <strong>8</strong>
              <span>Active orders</span>
            </div>
            <div>
              <strong>24</strong>
              <span>Wishlist items</span>
            </div>
            <div>
              <strong>3</strong>
              <span>Saved addresses</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
