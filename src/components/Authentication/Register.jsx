import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../firebase/AuthProvider";

const Register = () => {
  const { signUp, signInWithGoogle } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (!/^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{6,}$/.test(password)) {
      setError(
        "Password is invalid. It should be at least 6 characters long, contain at least one uppercase letter, and have at least one special character"
      );
    } else {
      setError("");
      if (email) {
        signUp(email, password)
          .then((result) => {
            console.log(result.user);
            setSuccess("User Created Successfully");
          })
          .catch((error) => {
            console.log(error.message);
            setError(error.message);
          });
      }
    }
  };

  const handleGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        setSuccess("User Created Successfully");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  //   console.log(email, password);
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-200">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Sign Up
          </h2>
          <form>
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
            <p className="text-green-400">{success}</p>
            <button
              onClick={handleRegister}
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold p-2 rounded focus:outline-none focus:bg-green-600"
            >
              Sign Up
            </button>
          </form>
          <div className="text-center mt-6">
            <p className="text-gray-600 text-sm">
              Do not have an account?{" "}
              <NavLink to="/login" className="text-green-500 hover:underline">
                Login
              </NavLink>
            </p>
          </div>
          <div className="mt-6 text-center">
            <button
              onClick={handleGoogle}
              className="bg-white hover:bg-gray-200 text-gray-800 font-semibold p-2 rounded border border-gray-300 focus:outline-none"
            >
              Sign Up with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
