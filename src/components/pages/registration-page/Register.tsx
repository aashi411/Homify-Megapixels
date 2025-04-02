const Register = () => {
  return (
    <div>
      <title>Register</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      ></link>
      <div className="container">
        <div className="w-full flex justify-center items-start flex-col">
          <div className="flex w-full items-center justify-center mb-8">
            <h2 className="flex text-center">Register</h2>
          </div>
          <form className="w-full flex items-center justify-center flex-col gap-4">
            <div className="w-[70%] form-group items-center justify-center">
              <input
                type="text"
                id="firstName"
                placeholder="Enter your first name"
                required
              ></input>
            </div>
            <div className="w-[70%] form-group items-center justify-center">
              <input
                type="text"
                id="lastName"
                placeholder="Enter your last name"
                required
              ></input>
            </div>
            <div className="w-[70%] form-group items-center justify-center">
              <input
                type="email"
                id="emailId"
                placeholder="Enter your email ID"
                required
              ></input>
            </div>
            <div className="w-[70%] form-group items-center justify-center">
              <input
                type="text"
                id="college"
                placeholder="Enter your college name"
              ></input>
            </div>
            <button type="submit" className="btn btn-primary w-[70%] items-center justify-center">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
