import { Link } from 'react-router-dom';

function Signup() {
  return (
    <section className="auth-page container">
      <div className="auth-panel">
        <h2>Create your account</h2>
        <p>Start building your LunaCart profile with just a few details.</p>
        <form onSubmit={(event) => event.preventDefault()}>
          <label>
            Full name
            <input type="text" placeholder="Alex Johnson" />
          </label>
          <label>
            Email address
            <input type="email" placeholder="hello@luna.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="********" />
          </label>
          <button type="submit" className="button-primary">
            Create account
          </button>
        </form>
        <p className="auth-footer">
          Already a member? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </section>
  );
}

export default Signup;
