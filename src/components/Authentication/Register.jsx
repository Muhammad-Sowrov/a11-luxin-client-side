import { NavLink } from "react-router-dom";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const registerInfo = { name, email, password };
    console.log(registerInfo);
  };
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-200">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Sign Up
          </h2>
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-semibold">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                placeholder="Full Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-semibold">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-600 text-sm font-semibold">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold p-2 rounded focus:outline-none focus:bg-green-600"
            >
              Sign Up
            </button>
          </form>
          <div className="text-center mt-6">
            <p className="text-gray-600 text-sm">
              Do not have an account? {" "}
              <NavLink to="/login" className="text-green-500 hover:underline">
                Login
              </NavLink>
            </p>
          </div>
          <div className="mt-6 text-center">
            <button className="bg-white hover:bg-gray-200 text-gray-800 font-semibold p-2 rounded border border-gray-300 focus:outline-none">
              Sign Up with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
