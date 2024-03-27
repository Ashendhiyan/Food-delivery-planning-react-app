import React from 'react'
import cycle from "../assets/cycling_983534.png"
import HomeCard from '../component/HomeCard'
import { useSelector } from 'react-redux'
import CardFeature from '../component/CardFeature'

const Home:React.FC = () => {
  const productData = useSelector((state:any)=>state.product.productList)
  console.log(productData)
  const homeProductCartList = productData.slice(0,4)
  // Vegitables filtering part
  const homeProductCartListVegitables = productData.filter((el:any)=>el.category === "Vegitables",[])
  console.log(homeProductCartListVegitables)
  return (
    <div className='p-2 md:p-4'>
      <div className='md:flex gap-5 py-2'>
        <div className='md:w-1/2'>
          <div className='flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full'>
              <p className='text-sm font-medium text-slate-900'>Bike Delivery</p>
              <img src={cycle} className='h-7'/>
          </div>
            <h2 className='text-4xl md:text-7xl font-bold py-3'>The Fasted Delivery  in <span className='text-red-600'>Your Home</span></h2>
            <p className='py-3 text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quam odit quo nihil architecto repellat ducimus eum nobis, tenetur, assumenda nostrum ea ex. Voluptatem soluta atque eos nemo culpa tempore.</p>
            <button className='font-bold bg-red-500 text-slate-200 px-4 py-2 rounded-md'>Order Now</button>
        </div>

        <div className='md:w-1/2 flex flex-wrap gap-5 p-4 justify-center'>
          {
           homeProductCartList[0] && homeProductCartList.map((el: any) =>{
              return(
                <HomeCard
                key={el._id}
                name={el.name}
                image={el.image}
                price={el.price}
                category={el.category}
                />
              )
            })
          }
        </div>
      </div>
      <div className='mb-48'>
          <h2 className='font-bold text-2xl text-slate-800 '>Fresh Vegitables</h2>
          <div className=''>
            {
              homeProductCartListVegitables.map((el:any)=>{
                return(
                  <CardFeature
                  key={el._id}
                  name={el.name}
                  image={el.image}
                  price={el.price}
                  category={el.category}
                  />
                )
              })
            }
          </div>
      </div>
    </div>
  )
}

export default Home