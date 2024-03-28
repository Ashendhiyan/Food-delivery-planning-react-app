import React from 'react'

interface CardFeatureProps {
    name: string;
    image: string;
    category: string;
    price: number;
  }

const CardFeature:React.FC<CardFeatureProps> = ({name,image,price,category}) => {
  return (
    <div className='w-full min-w-[200px] bg-white hover:shadow-lg drop-shadow-lg pt-5 px-4 cursor-pointer flex flex-col'>
        <div className='h-28 flex flex-col justify-center items-center'>
            <img src={image} className='h-full'/>
        </div>
        <h3 className="font-semibold text-slate-600 capitalize text-lg mt-4">
            {name}
          </h3>
          <p className=" text-slate-500 font-medium">{category}</p>
          <p className=" font-bold">
            <span className="text-red-500">Rs.</span>
            <span>{price}</span>
          </p>
          <button className='bg-yellow-500 py-1 my-4 mt-2 rounded'>Add Cart</button>
    </div>
  )
}

export default CardFeature