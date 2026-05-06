const boxItems = [
  { title: 'Clothes', image: '/box1_image.jpg' },
  { title: 'Health and Personal Care', image: '/box2_image.jpg' },
  { title: 'Furniture', image: '/box3_image.jpg' },
  { title: 'Smartphones', image: '/box4_image.jpg' },
  { title: 'Beauty Picks', image: '/box5_image.jpg' },
  { title: 'Pets', image: '/box6_image.jpg' },
  { title: 'Drawings', image: '/box7_image.jpg' },
  { title: 'Fashion', image: '/box8_image.jpg' }
];

function App() {
  return (
    <div className="app">
      <header>
        <div className="navbar">
          <div className="nav-logo border">
            <div className="logo" />
          </div>
          <div className="nav-address border">
            <p className="add-first">Deliver to</p>
            <div className="add-icon">
              <i className="fa-solid fa-location-dot" />
              <p className="add-sec">India</p>
            </div>
          </div>
          <div className="nav-search">
            <select className="select-first">
              <option>All</option>
            </select>
            <input placeholder="Search Amazon" className="input-first" />
            <div className="search-icon">
              <i className="fa-sharp fa-solid fa-magnifying-glass" />
            </div>
          </div>
          <div className="nav-signin border">
            <p>
              <span>Hello, sign in</span>
            </p>
            <p className="nav-acc">Accounts &amp; Lists</p>
          </div>
          <div className="nav-return border">
            <p>
              <span>Returns</span>
            </p>
            <p className="nav-acc">& Orders</p>
          </div>
          <div className="nav-cart border">
            <i className="fa-solid fa-cart-shopping" />
            Cart
          </div>
        </div>

        <div className="panel">
          <div className="panel-all">
            <i className="fa-solid fa-bars" />
            All
          </div>
          <div className="panel-1">
            <p>Today Deals</p>
            <p>Gifts Cards</p>
            <p>Sell</p>
            <p>Prime Video</p>
            <p>Customer Service</p>
          </div>
          <div className="deals">Shop Deals</div>
        </div>
      </header>

      <div className="hero">
        <div className="hero-heading">
          <p>
            You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery.{' '}
            <a href="#">Click here to go to amazon.in</a>
          </p>
        </div>
      </div>

      <div className="shop-section">
        {boxItems.map((box) => (
          <div key={box.title} className="box">
            <div className="box-content">
              <h2>{box.title}</h2>
              <div className="box-img" style={{ backgroundImage: `url('${box.image}')` }} />
              <a href="#">Shop Now</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
