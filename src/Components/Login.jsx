import React, { useState } from "react";

const Login = ({userCheck }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);

  const usernameHandler = (event) => setUsername(event.target.value);
  const passwordHandler = (event) => setPassword(event.target.value);
  const submitHandler = (e) => {
    e.preventDefault();
    const user = {
      username: username,
      password: password,
    };
    userCheck(user);
    if (!userCheck(user)) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
  };

  const labelClass = "block text-center";
  const inputClass =
    "border rounded-md border-cyan-500 w-3/4 h-8 text-base focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-cyan-800";

  return (
    <div className="h-full flex items-center justify-center">
      <div className="bg-zinc-200/50 h-70 w-2/6 px-10 py-5 flex flex-col justify-around mx-auto my-auto">
        <form
          onSubmit={submitHandler}
          className=" h-full flex flex-col justify-around"
        >
          <h2 className="text-center font-bold text-3xl">Please Login</h2>
          <label className={labelClass}>
            <input
              onChange={usernameHandler}
              className={inputClass}
              type="text"
              placeholder="Username"
            />
          </label>
          <label className={labelClass}>
            <input
              onChange={passwordHandler}
              className={inputClass}
              type="password"
              placeholder="Password"
            />
          </label>
          <div className="h-10">
            <button
              type="submit"
              className="bg-cyan-500 rounded-full w-24 h-34 mx-auto block hover:w-26 hover:h-35 ease-in duration-100"
            >
              Login
            </button>
          </div>
        </form>
        {isInvalid && (
          <p className="text-center text-red-600 text-xl font-bold">
            PLEASE ENTER VALID DATA
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
