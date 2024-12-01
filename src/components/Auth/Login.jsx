import { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col items-center justify-center gap-3"
        >
          <input
            required
            type="email"
            placeholder="Enter your email"
            className="text-white outline-none bg-transparent border-2 border-emerald-600 rounded-full px-5 py-3 text-xl placeholder:text-gray-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            type="password"
            placeholder="Enter your password"
            className="text-white outline-none bg-transparent border-2 border-emerald-600 rounded-full px-5 py-3 text-xl placeholder:text-gray-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="text-white mt-5 outline-none border-none border-2 bg-emerald-600 rounded-full px-5 py-3 text-xl ">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
