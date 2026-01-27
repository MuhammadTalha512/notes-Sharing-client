import React from 'react'

const ProductCard = ({product, addToCart}) => {
  return (
    <div className='border rounded-xl p-4 hover:shadow-lg transition-shadow flex flex-col justify-between'>
      <img src={product.image} className='h-32 mx-auto' alt="product" />
        <h3 className='font-semibold mt-2'>{product.name}</h3>
        <p className='text-green-600 font-bold'>Rs {product.price}</p>
        <button onClick={() => addToCart(product)} className='mt-3  w-full bg-green-600 text-white py-2 rounded-lg'>
          Add To Card
        </button>
    </div>
  )
}

export default ProductCard