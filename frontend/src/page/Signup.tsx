import React, { useState } from "react";
import loginImg from "../assets/hello-2488_256.gif";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { ImagetoBase64 } from "../utility/ImagetoBase64";
import axios from "axios";
import toast from "react-hot-toast";

export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const clearData = () => {
    setFirstName("");
    setLastName("");
    setEail("");
    setPassword("");
    setConfirmPassword("");
    setImage("");
  };

  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEail] = useState("");
  const [Password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState<string>("");

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleProfileImageUpload = async (e: any) => {
    const data = (await ImagetoBase64(e.target.files[0])) as string;
    console.log(data);
    setImage(data);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (firstName && email && Password && confirmPassword) {
      if (Password === confirmPassword) {
        try {
          const response = await axios.post("http://localhost:8080/signup", {
            firstName: firstName,
            lastName: lastName,
            email: email,
            Password: Password,
            confirmPassword: confirmPassword,
            image: image,
          });

          if (response.data.message === "Successfully sign Up !") {
            clearData();
            toast.success("Successfully sign up !")
            navigate('/login');
          } else {
            toast.error("Email id is already registered !");
          }
        } catch (error) {
          console.error("Axios Error :", error);
        }
      } else {
        toast.error("Wrong password.");
      }
    } else {
      toast.error("Please enter required fields.");
    }
  };


  return (
    <div className="mt- -m-9 md:p-1">
      <div className="w-full max-w-sm bg-white m-auto flex items-center justify-center flex-col p-4 rounded-3xl">
        {/* <h1 className='text-center text-2xl font-bold'>Sign Up</h1> */}
        <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md mb-1 mt- -m-3">
          <img src={image ? image : loginImg} className="w-full h-full" />

          <label htmlFor="profieImage">
            <div className="absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-50 w-full text-center cursor-pointer">
              <p className="text-sm text-white p-1">Upload</p>
            </div>
            <input
              type={"file"}
              id="profieImage"
              accept="image/*"
              className="hidden"
              onChange={handleProfileImageUpload}
            />
          </label>
        </div>

        <form className="w-full py-2" onSubmit={handleSubmit}>
          <div className="mb-1">
            <label htmlFor="firstName" className="form-label mb-0">
              First Name
            </label>
            <input
              type="firstName"
              className="form-control"
              id="firstName"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="lastName" className="form-label mb-0">
              Last Name
            </label>
            <input
              type="lastName"
              className="form-control"
              id="lastName"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <div className="mb-1">
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
          <div className="mb-1">
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

          <div className="mb-1">
            <label htmlFor="confirmpassword" className="form-label mb-0 ">
              Confirm Password
            </label>
            <div className="focus-within:outline border-2  outline-1 focus-within:outline-blue-300 flex px-2 py-1 rounded mt-1 mb-2">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="w-full border-none outline-none"
                id="confirmpassword"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
              <span
                className="flex text-xl cursor-pointer"
                onClick={handleShowConfirmPassword}
              >
                {showConfirmPassword ? <BiShow /> : <BiHide />}
              </span>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-3"
            >
              Sign up
            </button>
          </div>
        </form>
        <p className="mt-1 text-center text-sm text-gray-500">
          Already have an account ?
          <Link
            to={"/login"}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            {" "}
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
