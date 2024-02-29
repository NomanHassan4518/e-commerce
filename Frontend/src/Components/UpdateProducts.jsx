import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateProducts = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [company, setCompany] = useState("")

    let params = useParams();
    let navigate = useNavigate();

    const getProductDetail = async () => {
        let result = await fetch(`http://localhost:5000/product/${params.id}`);
        result = await result.json();
        console.log(result);
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    };
    
    // useEffect(() => {
    //     const fetchData = async () => {
    //         await getProductDetail();
    //     };
    //     fetchData();
    // }, [params.id]); // Include params.id if it triggers the change in product details
    
    useEffect(() => {
        const fetchData = async () => {
            await getProductDetail();
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.id]);
    

  


    const updateProduct = async () => {
        let result = await fetch(`http://localhost:5000/product/${params.id}`, {
            method: "PUT",
            body: JSON.stringify({ name, price, category, company }),
            headers: {
                "Content-Type": "application/json"
            }
        })

        result = await result.json();
        if (result) {
            navigate("/")
        }
    }
    return (
        <div className='py-5 pb-12 bg-blue-500 flex items-center justify-center flex-col'>
            <div className='bg-white rounded px-7 py-9 shadow-lg shadow-black space-y-2 !w-[35%] '>
                <div>
                    <h1 className='text-4xl font-bold mb-3 text-center uppercase '>Update Product</h1>
                    <p className='text-gray-600 mt-2 text-center'>Please fill in this form to Update a product.</p>
                </div>
                <div className='flex items-start flex-col w-full !mt-5 space-y-5'>
                    <div className='w-full'>
                        <input type="email" placeholder='Enter Product Name' className='w-[90%] bg-gray-200  py-2 px-7 my-2 rounded' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className='w-full'>
                        <input type="text" placeholder='Enter Product Price' className='w-[90%] bg-gray-200  py-2 px-7 my-2 rounded' value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>

                    <div className='w-full'>
                        <input type="text" placeholder='Enter Product Category' className='w-[90%] bg-gray-200  py-2 px-7 my-2 rounded' value={category} onChange={(e) => setCategory(e.target.value)} />
                    </div>

                    <div className='w-full'>
                        <input type="text" placeholder='Enter Product Company' className='w-[90%] bg-gray-200  py-2 px-7 my-2 rounded' value={company} onChange={(e) => setCompany(e.target.value)} />
                    </div>

                    <button className='mt-3 py-2 px-4 bg-blue-600 hover:bg-pink-600 text-white text-lg uppercase font-bold text-center rounded' onClick={updateProduct}>Sumbit</button>
                </div>

            </div>

        </div>
    )
}

export default UpdateProducts
