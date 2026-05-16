import { Link } from 'react-router-dom';

function Login() {
  return (
    <section className="auth-page container">
      <div className="auth-panel">
        <h2>Welcome back</h2>
        <p>Continue shopping at LunaCart with your premium account.</p>
        <form onSubmit={(event) => event.preventDefault()}>
          <label>
            Email address
            <input type="email" placeholder="hello@luna.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="********" />
          </label>
          <button type="submit" className="button-primary">
            Sign in
          </button>
        </form>
        <p className="auth-footer">
          New to LunaCart? <Link to="/signup">Create an account</Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
