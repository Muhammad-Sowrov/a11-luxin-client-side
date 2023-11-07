import { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../firebase/AuthProvider";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [google, setGoogle] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if ((email, password)) {
      setError("");
      signIn(email, password)
        .then((result) => {
          console.log(result.user);

          // after log
            navigate(location?.state ? location.state : '/')
        })
        // eslint-disable-next-line no-unused-vars
        .catch((error) => {
          setError(
            "Invalid Email or Password. Please use a valid Email and Password"
          );
        });
    }
  };


  const handleGoogle = () => {
    signInWithGoogle()
    .then(result => {
      setGoogle(result.user);
    })
    .catch(error => {
      console.log(error.message);
    })
  }
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-200">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Login
          </h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-semibold">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                placeholder="Password"
              />
            </div>
            <p className="text-red-400">{error}</p>
            <div className="mb-6">
              <label className="block text-gray-600 text-sm font-semibold">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
            </div>
            <button
              onClick={handleLogin}
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold p-2 rounded focus:outline-none focus:bg-green-600"
            >
              Login
            </button>
          </form>
          <div className="text-center mt-6">
            <p className="text-gray-600 text-sm">
              Do not have an account?{" "}
              <NavLink
                to="/register"
                className="text-green-500 hover:underline"
              >
                Sign Up
              </NavLink>
            </p>
          </div>
          <div className="mt-6 text-center">
            <button onClick={handleGoogle} className="bg-white hover:bg-gray-200 text-gray-800 md:rounded-lg font-semibold p-2 rounded border border-gray-300 focus:outline-none">
              Log in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
