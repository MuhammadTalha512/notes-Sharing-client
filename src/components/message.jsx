import React from 'react'
import { message } from 'antd';

const Toastify = (text, type) => {
 
    switch (type) {
        case 'success':message.success(text)          
            break;
        case 'error' : message.error(text)
            break;
        case 'warning': message.warning(text)
        default:
        case 'info':message.info(text)
    } 
    
  return (
    <>
    
    </>
  )
}

export default Toastify