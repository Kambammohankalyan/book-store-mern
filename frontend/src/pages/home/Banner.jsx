import React, { useState } from 'react'

import book1 from "/src/assets/books/book-1.png"
import book2 from "/src/assets/books/book-2.png"
import book3 from "/src/assets/books/book-3.png"

const Banner = () => {
  const [showSubscribe, setShowSubscribe] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    console.log('Subscribed with:', email)
    setShowSubscribe(false)
    setEmail('')
  }

  return (
    <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>
      <div className='md:w-1/2 w-full flex items-center md:justify-end relative'>
        <div className="relative h-[400px] w-full flex justify-center">
          <img 
            src={book1} 
            alt="Book 1" 
            className="absolute transform hover:-translate-y-2 transition-transform duration-300 h-[350px] object-cover z-30 rounded-lg shadow-xl"
            style={{ left: '10%' }}
          />
          <img 
            src={book2} 
            alt="Book 2" 
            className="absolute transform hover:-translate-y-2 transition-transform duration-300 h-[350px] object-cover z-20 rounded-lg shadow-xl"
            style={{ left: '30%', top: '20px' }}
          />
          <img 
            src={book3} 
            alt="Book 3" 
            className="absolute transform hover:-translate-y-2 transition-transform duration-300 h-[350px] object-cover z-10 rounded-lg shadow-xl"
            style={{ left: '50%', top: '40px' }}
          />
        </div>
      </div>
        
      <div className='md:w-1/2 w-full'>
        <h1 className='md:text-5xl text-2xl font-medium mb-7'>New Releases This Week</h1>
        <p className='mb-10'>It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone</p>

        {showSubscribe ? (
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-2 border rounded-lg flex-grow"
              required
            />
            <button type="submit" className='btn-primary'>Submit</button>
          </form>
        ) : (
          <button onClick={() => setShowSubscribe(true)} className='btn-primary'>
            Subscribe
          </button>
        )}
      </div>
    </div>
  )
}

export default Banner