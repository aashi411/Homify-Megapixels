import "./login.css";

const Login = () => {
  return (
    <div>
      <div className="container flex flex-col items-center justify-center">
        <title>Sign In</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        ></link>

        {/*Sign In Section */}
        {/* <div className="form-container"> */}
        <h2 className="w-full text-center">Sign In</h2>
        <form className="w-full flex flex-col justify-center items-center">
          <div className="form-group w-[70%]">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              required
            ></input>
          </div>
          <div className="form-group w-[70%]">
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
          <button type="submit" className="btn btn-primary w-[70%]">
            Sign in
          </button>
        </form>

        <div className="divider">
          <span>Or continue with</span>
        </div>
        <div className="social-signing flex flex-row gap-4">
          <button className="btn social-btn">
            <span className="google-icon">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
                className="w-6 mr-3"
              ></img>
            </span>
            Sign in with Google
          </button>
          <button className="btn social-btn">
            <span className="linkedin-icon">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1200px-LinkedIn_icon.svg.png"
                className="w-6 mr-3"
              ></img>
            </span>
            Sign in with LinkedIn
          </button>
        </div>

        <div className="register-link">
          Don't have an account? <a href="/register">Register here</a>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Login;
