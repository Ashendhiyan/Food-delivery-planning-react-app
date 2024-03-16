import React, { useEffect, useState } from "react";
import loginImg from "../assets/hello-2488_256.gif";
import { BiShow, BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginRedux } from "../redux/userSlice";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const clearData = () => {
    setEail("");
    setPassword("");
  };

  const navigate = useNavigate();
  const [email, setEail] = useState("");
  const [Password, setPassword] = useState("");

  const userData = useSelector(state => state);

  const dispatch = useDispatch();

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  useEffect(() => {
    console.log(userData); // Log userData whenever it changes
  }, [userData]); // Run the effect whenever userData changes

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (email && Password) {
      try {
        const response = await axios.post("http://localhost:8080/login", {
          email: email,
          Password: Password,
        });
        console.log(response.data)
        const responseData = {
          data: response.data.data, // Assuming your actual data is nested under data property
          status: response.status,
          statusText: response.statusText,
          // You can include other necessary properties here if needed
        };
        if (response.data.message === "Successfully loged in !") {
          dispatch(loginRedux(responseData));
          clearData();
          toast.success("Successfully loged in !");
          setTimeout(() => {
            navigate("/");
          }, 1000);
        } else {
          toast.error("This user is not registerd ! please sign up");
        }
      } catch (error) {
        console.error("Axios Error :", error);
      }
    } else {
      toast.error("please enter required fields !");
    }
  };

  return (
    <div className="p-14">
      <div className="w-full max-w-sm bg-white m-auto flex items-center justify-center flex-col p-4 rounded-3xl">
        {/* <h1 className='text-center text-2xl font-bold'>Sign Up</h1> */}
        <div className="w-20 overflow-hidden rounded-full drop-shadow-md ">
          <img src={loginImg} className="w-full" />
        </div>

        <form className="w-full py-2" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="email" className="form-label mb-0">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => {
                setEail(e.target.value);
              }}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="form-label mb-0 ">
              Password
            </label>
            <div className="focus-within:outline border-2 outline-1 focus-within:outline-blue-300 flex px-2 py-1 rounded mt-1 mb-2">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full border-none outline-none"
                id="password"
                value={Password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <span
                className="flex text-xl cursor-pointer"
                onClick={handleShowPassword}
              >
                {showPassword ? <BiShow /> : <BiHide />}
              </span>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-4"
            >
              Login
            </button>
          </div>
        </form>
        <p className="mt-3 text-center text-sm text-gray-500">
          Don't have an account ?
          <Link
            to={"/signup"}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            {" "}
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};
