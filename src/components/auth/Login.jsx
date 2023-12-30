import { useState } from "react";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";

const Login = ({ triggerLogin, setTriggerLogin, credentials }) => {
  const [loginCreds, setLoginCreds] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [showPassword, setShowPassord] = useState(null);

  // Handle Changes

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    setLoginCreds({
      ...loginCreds,
      [name]: inputValue,
    });
  };

  console.log(loginCreds);

  const togglePasswordReveal = () => {
    setShowPassord(!showPassword);
  };
  return (
    <div className="shadow-3xl absolute h-80 w-full md:w-1/2  bottom-1/2 top-1/2 z-50 bg-bg-accent">
      <div className="py-10 w-full  bg-bg-accent flex flex-col items-center justify-center  border-[2px] border-gray-400 p-2">
        <div className="w-full flex justify-end text-2xl">
          <button onClick={() => setTriggerLogin(!triggerLogin)}>
            <RxCross1 />
          </button>
        </div>
        <div className="flex flex-col gap-2 py-3">
          <h1 className="text-3xl text-center ">Sign In</h1>
          <p className="text-lg text-justify pt-3">
            Sign in to grab the bet deals on apparels. Shop for uptp 5000 and
            30% off!
          </p>
        </div>
        <div className="flex flex-col h-full justify-center items-center w-80 mx-auto gap-12 py-12">
          <div className="flex flex-col h-full space-y-2 w-full">
            <label htmlFor="email" className="text-left">
              Email
            </label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              className="border-2 border-gray-900 bg-white  px-2 py-4"
            />
          </div>

          <div className="flex flex-col h-full space-y-2 w-full">
            <label htmlFor="email" className="text-left">
              Password
            </label>
            <div className="relative w-full">
              <input
                onChange={handleChange}
                name="password"
                type={showPassword ? "text" : "password"}
                className="border-2 border-gray-900 bg-white  px-2 py-4 w-full"
              />
              <span
                className="absolute right-0 top-0 bottom-0 pr-3 flex items-center bg"
                onClick={togglePasswordReveal}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
          </div>

          <div className="w-full">
            <div className="flex items-center justify-between w-full">
              <div className="flex gap-1">
                <div className="border-black border-2 flex items-center rounded p-1">
                  <input
                    name="rememberMe"
                    type="checkbox"
                    checked={loginCreds.rememberMe}
                    onChange={handleChange}
                    className="w-5 h-5 appearance-none checked:bg-slate-900 rounded"
                  />
                </div>
                <label htmlFor="rememberMe" className="flex items-center">
                  Remember me
                </label>
              </div>
              <div>
                <a href="#" className="underline">
                  Forgot Password?
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full space-y-4">
            <button className="w-full bg-slate-950 text-slate-100 py-6 text-xl">
              Sign in
            </button>
            <button className="w-full text-slate-950 bg-slate-100 border-2 border-slate-950 py-6 text-xl">
              Remember Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
