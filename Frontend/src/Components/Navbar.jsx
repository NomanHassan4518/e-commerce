import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-black py-4 px-10 text-white'>
      <ul className='flex items-start space-x-12 text-xl '>
        <li><Link to="/">Products</Link></li>
        <li><Link to="/add_product">Add Products</Link></li>
        <li><Link to="/update_product">Update Products</Link></li>
        <li><Link to="/delete_product">Delete Products</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
