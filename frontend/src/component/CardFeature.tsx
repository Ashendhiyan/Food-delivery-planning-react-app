import React from 'react'

interface CardFeatureProps {
    name: string;
    image: string;
    category: string;
    price: number;
  }

const CardFeature:React.FC<CardFeatureProps> = ({name,image,price,category}) => {
  return (
    <div>
        <div className='h-20'>
            <img src={image} className='h-full'/>
        </div>
    </div>
  )
}

export default CardFeature