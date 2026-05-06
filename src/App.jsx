const navLinks = ['Today Deals', 'Gift Cards', 'Sell', 'Prime Video', 'Customer Service'];

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
      <header className="header">
        <div className="navbar">
          <a href="#" className="nav-logo" aria-label="Amazon Clone logo">
            <div className="logo" />
          </a>

          <div className="nav-address">
            <span className="nav-label">Deliver to</span>
            <div className="address-row">
              <i className="fa-solid fa-location-dot" aria-hidden="true" />
              <span>India</span>
            </div>
          </div>

          <form className="nav-search" role="search" aria-label="Search Amazon">
            <label htmlFor="search" className="sr-only">
              Search Amazon
            </label>
            <select className="select-first" aria-label="Search category">
              <option>All</option>
            </select>
            <input id="search" type="search" className="input-first" placeholder="Search Amazon" />
            <button type="submit" className="search-icon" aria-label="Search">
              <i className="fa-sharp fa-solid fa-magnifying-glass" />
            </button>
          </form>

          <div className="nav-actions">
            <a href="#" className="nav-action">
              <span className="nav-label">Hello, sign in</span>
              <strong>Accounts &amp; Lists</strong>
            </a>
            <a href="#" className="nav-action">
              <span className="nav-label">Returns</span>
              <strong>&amp; Orders</strong>
            </a>
            <a href="#" className="nav-cart">
              <i className="fa-solid fa-cart-shopping" aria-hidden="true" />
              <span>Cart</span>
            </a>
          </div>
        </div>

        <nav className="panel" aria-label="Primary navigation">
          <button className="panel-all" type="button">
            <i className="fa-solid fa-bars" aria-hidden="true" />
            All
          </button>

          <div className="panel-links">
            {navLinks.map((link) => (
              <a key={link} href="#" className="panel-link">
                {link}
              </a>
            ))}
          </div>

          <a href="#" className="deals">
            Shop Deals
          </a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p>
              You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery.
              <a href="#">Click here to go to amazon.in</a>
            </p>
          </div>
        </section>

        <section className="shop-section" aria-label="Product categories">
          {boxItems.map((box) => (
            <article key={box.title} className="box">
              <div className="box-img" style={{ backgroundImage: `url('${box.image}')` }} />
              <div className="box-content">
                <h2>{box.title}</h2>
                <a href="#">Shop Now</a>
              </div>
            </article>
          ))}
        </section>
      </main>

      <footer className="footer">
        <p>Amazon Clone — responsive React + Vite project</p>
        <p>Built for deployment on Vercel and optimized for desktop, tablet, and mobile.</p>
      </footer>
    </div>
  );
}

export default App;
