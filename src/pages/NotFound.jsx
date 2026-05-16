import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="not-found-page container">
      <div className="not-found-panel">
        <h1>404</h1>
        <p>Sorry, we couldn’t find that page.</p>
        <Link to="/" className="button-primary">
          Return home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
