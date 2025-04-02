const Register = () => {
  return (
    <div>
      <title>Register</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      ></link>
      <div className="container">
        <div className="form-container w-full flex justify-center items-start flex-col gap-10">
          <div className="flex w-full items-center justify-center">
            <h2 className="flex text-center">Register</h2>
          </div>
          <form className="w-[65%]">
            <div className="form-group w-full">
              <input
                type="text"
                id="firstName"
                placeholder="Enter your first name"
                required
              ></input>
            </div>
            <div className="form-group">
              <input
                type="text"
                id="lastName"
                placeholder="Enter your last name"
                required
              ></input>
            </div>
            <div className="form-group">
              <input
                type="email"
                id="emailId"
                placeholder="Enter your email ID"
                required
              ></input>
            </div>
            <div className="form-group">
              <input
                type="text"
                id="college"
                placeholder="Enter your college name"
              ></input>
            </div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
