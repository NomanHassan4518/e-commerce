import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let navigate = useNavigate();

    const handleLogin = async () => {
        let result = await fetch("https://e-commerce-orpin-zeta.vercel.app/login", {
            method: "post",
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        result = await result.json();

        if (result) {
            navigate("/")
            alert("Login Successfully!")
        }

        localStorage.setItem("user",JSON.stringify(result))
    }
    return (
        <div className='h-[37rem] bg-blue-500 flex items-center justify-center flex-col'>
            <div className='bg-white rounded px-7 py-9 shadow-lg shadow-black space-y-2 !w-[35%] h-[25rem]'>
                <div>
                    <h1 className='text-4xl font-bold mb-3 text-center uppercase '>Log In</h1>
                    <p className='text-gray-600 mt-2 text-center'>Please fill in this form to Login an account.</p>
                </div>
                <div className='flex items-start flex-col w-full !mt-5'>
                    <input type="email" placeholder='Enter your email' className='w-[90%] bg-gray-200  py-2 px-7 my-5 rounded' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder='Enter your password' className='w-[90%] bg-gray-200  py-2 px-7 my-5 rounded' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className='mt-3 py-2 px-4 bg-blue-600 hover:bg-pink-600 text-white text-lg uppercase font-bold text-center rounded' onClick={handleLogin}>Log In</button>
                </div>

            </div>
            <h1 className='mt-4 text-white'>
                <span>Creat an account?</span>
                <Link to="/signup" className='underline'> Signup here</Link>
            </h1>
        </div>
    )
}

export default Login
