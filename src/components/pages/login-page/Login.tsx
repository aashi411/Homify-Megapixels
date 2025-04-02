import "./login.css";

const Login = () => {
  return (
    <div>
      <title>Sign In</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      ></link>

      <div className="container">
        {/*Sign In Section */}
        <div className="form-container">
          <h2>Sign In</h2>
          <form>
            <div className="form-group">
            <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                required
              ></input>
            </div>
            <div className="form-group">
            <label htmlFor="name">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              ></input>
            </div>
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </form>

          <div className="divider">
            <span>Or continue with</span>
          </div>

          <button className="btn social-btn">
            <span className="google-icon"></span>
            Sign in with Google
          </button>
          <button className="btn social-btn">
            <span className="linkedin-icon"></span>
            Sign in with LinkedIn
          </button>

          <div className="register-link">
            Don't have an account? <a href="/register">Register here</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
