import React from 'react'
import { IoCloudUploadOutline } from "react-icons/io5";

export const NewProduct = () => {
  return (
    <div className='p-4'>
      <form className='m-auto w-full max-w-md shadow flex flex-col p-3 bg-white'>
        <label htmlFor='name'>Name</label>
        <input type={'text'} name='name' className='bg-slate-200 p-1 my-1'/>

        <label htmlFor="category">Category</label>
        <select className='bg-slate-200 p-1 my-1' id='category'>
          <option>Fruites</option>
          <option>Vegitables</option>
          <option>Icecram</option>
          <option>Food</option>
          <option>Pizza</option>
        </select>

        <label htmlFor="image">Image</label>
        <div id='image' className='h-40 w-full bg-slate-200  rounded flex items-center justify-center'>
          <span className='text-5xl'><IoCloudUploadOutline /></span>
        </div>

        <label htmlFor="price" className='my-1'>Price</label>
        <input type={"text"} className='bg-slate-200 p-1 my-1' />

        <label htmlFor="description">Description</label>
        <textarea rows={2} className='bg-slate-200 p-1 my-1 resize-none'></textarea>

        <button className='bg-blue-500 hover:bg-blue-600 text-white text-lg font-medium my-2 drop-shadow'>Save</button>

      </form>
    </div>
  )
}
