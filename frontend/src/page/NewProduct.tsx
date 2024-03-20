import React, { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { ImagetoBase64 } from "../utility/ImagetoBase64";
import axios from "axios";
import toast from "react-hot-toast";

export const NewProduct = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

 const clearData = () =>{
    setName("");
    setCategory("");
    setImage("");
    setPrice("");
    setDescription("");
 }

  const uploadImage = async (e: any) => {
    const data = (await ImagetoBase64(e.target.files[0])) as string;
    // console.log(data)
    setImage(data);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (name && category && image && price && description) {
      const response = await axios.post("http://localhost:8080/uploadProduct", {
        name: name,
        category: category,
        image: image,
        price: price,
        description: description,
      });
      console.log(response);
      if(response.data.message==="Successffully uploaded !"){
        toast.success(response.data.message);
        clearData()
      }else{
        toast.error("Somthing wrong !")
      }
    }else{
      toast.error("Enter require fields !")
    }
  };

  return (
    <div className="p-3">
      <form
        className="m-auto w-full max-w-md shadow flex flex-col p-4 bg-white rounded-3xl"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name" className="-mt-5 -mb-1">
          Name
        </label>
        <input
          type={"text"}
          name="name"
          className="form-control p-1 my-1 mb-1"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <label htmlFor="category" className="-mb-1">
          Category
        </label>
        <select
          className="form-select p-1 my-1 cursor-pointer"
          aria-label="Default select example"
          id="category"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option selected>Open this select menu</option>
          <option>Fruites</option>
          <option>Vegitables</option>
          <option>Ice Cream</option>
          <option>Food</option>
          <option>Pizza</option>
          <option>cake</option>
          <option>berger</option>
        </select>
        <label htmlFor="image" className=" mt-1">
          Image
          <div className="h-40 w-full bg-slate-200  rounded flex items-center justify-center cursor-pointer">
            {image ? (
              <img src={image} className="h-full" />
            ) : (
              <span className="text-5xl">
                <IoCloudUploadOutline />
              </span>
            )}
            <input
              type={"file"}
              accept="image/*"
              id="image"
              onChange={uploadImage}
              className="hidden"
            />
          </div>
        </label>

        <label htmlFor="price" className="mt-1 -mb-1">
          Price
        </label>
        <input
          type={"text"}
          className="form-control p-1 my-1"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />

        <label htmlFor="description" className=" -mb-1">
          Description
        </label>
        <textarea
          rows={2}
          className="form-control p-1 my-1 resize-none"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
        <button className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 -mb-3">
          Save
        </button>
      </form>
    </div>
  );
};
