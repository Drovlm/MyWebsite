import React from 'react'
import './Contact.css'; 
const Contact = () => {
  return (
    <body className='body'>
      <div className='contacts'>
        <div className='contactinfo'>
          <p>Email: modarking.mj@gmail.com</p>
          <p>Telegram:<a className='Tlink' href="https://t.me/Drovlm"> @Drovlm</a></p>
          <p>Github:<a className='Glink' href="https://github.com/Drovlm"> Drovlm</a></p>
          <p>Phone: <a style={{fontFamily:'Arial'}}>+79256558775</a></p>
          </div>
        </div>
        </body>
  )
}
export default Contact;