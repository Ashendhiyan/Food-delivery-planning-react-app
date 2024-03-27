import { Outlet } from "react-router-dom";
import "./App.css";
import { Header } from "./component/Header";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import axios from "axios";
import { setDataProduct } from "./redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";

function App() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product);
  useEffect(() => {
    (async () => {
      // const res = await axios.get("http://localhost:8080/products")
      const res = await fetch("http://localhost:8080/products");
      const resData = await res.json();
      console.log(resData);
      dispatch(setDataProduct(resData));
    })();
  }, []);
  console.log(productData);
  return (
    <>
      <Toaster />
      <div>
        <Header />
        <main className="bg-slate-100 min-h-[calc(89vh)]">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
