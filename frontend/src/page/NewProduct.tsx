import React from "react";
import { IoCloudUploadOutline } from "react-icons/io5";

export const NewProduct = () => {
  return (
    <div className="p-3">
      <form className="m-auto w-full max-w-md shadow flex flex-col p-4 bg-white rounded-3xl">
        <label htmlFor="name" className="-mt-5 -mb-1">Name</label>
        <input type={"text"} name="name" className="form-control p-1 my-1 mb-1" />

        <label htmlFor="category"  className="-mb-1">Category</label>
        <select className="form-select p-1 my-1 cursor-pointer" aria-label="Default select example" id='category'>
          <option selected>Open this select menu</option>
          <option value="1">Fruites</option>
          <option value="2">Vegitables</option>
          <option value="3">Icecram</option>
          <option value="4">Food</option>
          <option value="5">Pizza</option>
        </select>
        <label htmlFor="image" className=" mt-1">Image</label>
        <div
          id="image"
          className="h-40 w-full bg-slate-200  rounded flex items-center justify-center"
        >
          <span className="text-5xl">
            <IoCloudUploadOutline />
          </span>
        </div>

        <label htmlFor="price" className="mt-1 -mb-1">
          Price
        </label>
        <input type={"text"} className="form-control p-1 my-1" />

        <label htmlFor="description" className=" -mb-1">Description</label>
        <textarea
          rows={2}
          className="form-control p-1 my-1 resize-none"
        ></textarea>
         <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 -mb-3"
            >
              Save
            </button>
      </form>
    </div>
  );
};
