import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div className='h-[37rem] bg-blue-500 flex items-center justify-center flex-col'>
            <div className='bg-white rounded px-7 py-9 shadow-lg shadow-black space-y-2 !w-[35%] h-[29rem]'>
                <div>
                    <h1 className='text-4xl font-bold mb-3 text-center uppercase '>Sign Up</h1>
                    <p className='text-gray-600 mt-2 text-center'>Please fill in this form to create an account.</p>
                </div>
                <div className='flex items-start flex-col w-full !mt-5'>
                    <input type="text" placeholder='Enter your name' className='w-[90%] bg-gray-200  py-2 px-7 my-5 rounded'/>
                    <input type="email" placeholder='Enter your email' className='w-[90%] bg-gray-200  py-2 px-7 my-5 rounded'/>
                    <input type="password" placeholder='Enter your password' className='w-[90%] bg-gray-200  py-2 px-7 my-5 rounded'/>
                    <button className='mt-3 py-2 px-4 bg-blue-600 text-white text-lg uppercase font-bold text-center rounded'>Sign Up</button>
                </div>
               
            </div>
            <h1 className='mt-4 text-white'>
                    <span>Already have an account?</span>
                    <Link to="/login" className='underline'> Login here</Link>
                </h1>
        </div>
    )
}

export default SignUp
