import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'

const Navbar = () => {
  let auth = localStorage.getItem("user")
  let navigate=useNavigate();


  const logout =()=>{
    localStorage.clear();
    navigate("/signup")
  }
  return (
    <div className='bg-black py-4 px-10 text-white'>
      {
        auth ?
          <ul className='flex items-start space-x-12 text-xl '>
            <li><Link to="/">Products</Link></li>
            <li><Link to="/add_product">Add Products</Link></li>
            <li><Link to="/update_product">Update Products</Link></li>
            <li><Link to="/delete_product">Delete Products</Link></li>
            <li><Link to="/signup" onClick={logout}>Logout ({JSON.parse(auth).name})</Link></li>
          </ul>
          :
          <ul className='flex items-start space-x-12 text-xl justify-end '>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </ul>
      }

    </div>
  )
}

export default Navbar
