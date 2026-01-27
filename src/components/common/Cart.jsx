import React from 'react'

const Cart = ({cart, updateQty}) => {
  return (
    <div className='bg-white p-4 rounded-xl'>
      {cart.map(item => (
       <div key={item._id} className="flex justify-between mb-3">
          <span>{item.name}</span>
          <input type="number" value={item.qty}
            onChange={(e) => updateQty(item._id, e.target.value)}
            className="w-16 border rounded text-center"/>
        </div>
      ))}
    </div>
  )
}

export default Cart