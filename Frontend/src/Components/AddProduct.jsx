import React, { useState } from 'react'

const AddProduct = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [company, setCompany] = useState("")
    const [error, setError] = useState(true)

    let auth = localStorage.getItem("user")
    let userId = JSON.parse(auth)._id


    const submitProduct = async () => {

        if (!name || !price || !category || !company) {
            setError(false)
            return false
        }

        setName("");
        setPrice("");
        setCategory("");
        setCompany("");

        let result = await fetch("http://localhost:5000/addproduct", {
            method: "post",
            body: JSON.stringify({ name, price, category, userId, company }),
            headers: {
                "Content-Type": "application/json"
            }
        })

        result = await result.json();

        
        if (result) {
            alert("Product added successfully!")
        }
    }
    return (
        <div className='py-5 bg-blue-500 flex items-center justify-center flex-col'>
            <div className='bg-white rounded px-7 py-9 shadow-lg shadow-black space-y-2 !w-[35%] '>
                <div>
                    <h1 className='text-4xl font-bold mb-3 text-center uppercase '>Add Product</h1>
                    <p className='text-gray-600 mt-2 text-center'>Please fill in this form to add a product.</p>
                </div>
                <div className='flex items-start flex-col w-full !mt-5 space-y-5'>
                    <div className='w-full'>
                        {!name && !error && <p className='text-red-600'>Enter Valid Name</p>}
                        <input type="email" placeholder='Enter Product Name' className='w-[90%] bg-gray-200  py-2 px-7 my-2 rounded' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className='w-full'>
                        {!price && !error && <p className='text-red-600'>Enter Valid Price</p>}
                        <input type="text" placeholder='Enter Product Price' className='w-[90%] bg-gray-200  py-2 px-7 my-2 rounded' value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>

                    <div className='w-full'>
                        {!category && !error && <p className='text-red-600'>Enter Valid Category</p>}
                        <input type="text" placeholder='Enter Product Category' className='w-[90%] bg-gray-200  py-2 px-7 my-2 rounded' value={category} onChange={(e) => setCategory(e.target.value)} />
                    </div>

                    <div className='w-full'>
                        {!company && !error && <p className='text-red-600'>Enter Valid Company</p>}
                        <input type="text" placeholder='Enter Product Company' className='w-[90%] bg-gray-200  py-2 px-7 my-2 rounded' value={company} onChange={(e) => setCompany(e.target.value)} />
                    </div>

                    <button className='mt-3 py-2 px-4 bg-blue-600 hover:bg-pink-600 text-white text-lg uppercase font-bold text-center rounded' onClick={submitProduct}>Sumbit</button>
                </div>

            </div>

        </div>
    )
}

export default AddProduct
