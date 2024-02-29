import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
    let [data, setData] = useState(null)
    let [loading, setLoading] = useState(true)

   
        const fetchData = async () => {
            try {
                let response = await fetch("https://e-commerce-orpin-zeta.vercel.app/products");
                let jsonData = await response.json();
                setData(jsonData)
            }

            finally {
                setLoading(false)
            }
        }

fetchData();
   

    const deleteItem = async (id) => {
        console.log(id);

        let result = await fetch(`https://e-commerce-orpin-zeta.vercel.app/products/${id}`, {
            method: "Delete"
        })

        result = await result.json();

        if(result){
           fetchData();
        }
    }

    return (
        loading ? <h1>Data is Loading</h1> :
            // <din className=' bg-blue-600 px-28 py-16 block'>
            //     <div className=' grid grid-cols-3 gap-5 '>
            //         {
            //             data.map((item, index) => (
            //                 <div key={index} className='bg-white px-6 py-8 rounded shadow-xl space-y-5'>
            //                     <h1 className='text-center font-bold text-2xl'>Product No# {index+1}</h1>
            //                     <h1><span className='text-xl font-semibold'>Name:</span> {item.name}</h1>
            //                     <h1><span className='text-xl font-semibold'>Price:</span> {item.price}</h1>
            //                     <h1><span className='text-xl font-semibold'>Category:</span> {item.category}</h1>
            //                     <h1><span className='text-xl font-semibold'>Company:</span> {item.company}</h1>
            //                 </div>
            //             ))
            //         }
            //     </div>
            // </din>

            <div className='px-4 pt-5'>
                <h1 className='text-center py-5 text-5xl font-bold'>Products List</h1>
                <ul className='flex items-center'>
                    <li className='text-center bg-black text-white text-lg font-semibold border  border-blue-400  py-1 w-[107px]'>S. No</li>
                    <li className='text-center bg-black text-white text-lg font-semibold border  border-blue-400  py-1 w-[245px]'>Name</li>
                    <li className='text-center bg-black text-white text-lg font-semibold border  border-blue-400  py-1 w-[245px]'>price</li>
                    <li className='text-center bg-black text-white text-lg font-semibold border  border-blue-400  py-1 w-[245px]'>Category</li>
                    <li className='text-center bg-black text-white text-lg font-semibold border  border-blue-400  py-1 w-[245px]'>Company</li>
                    <li className='text-center bg-black text-white text-lg font-semibold border  border-blue-400  py-1 w-[245px]'>Operations</li>
                </ul>

                {
                    data.map((item, index) => (
                        <ul className='flex items-center text-lg' key={index}>
                            <li className='text-center bg-gray-200 border  border-blue-400  py-1 w-[107px]'>{index + 1}</li>
                            <li className='text-center bg-gray-300 border  border-blue-400  py-1 w-[245px]'>{item.name}</li>
                            <li className='text-center bg-gray-200 border  border-blue-400  py-1 w-[245px]'>{item.price}</li>
                            <li className='text-center bg-gray-300 border  border-blue-400  py-1 w-[245px]'>{item.category}</li>
                            <li className='text-center bg-gray-200 border  border-blue-400  py-1 w-[245px]'>{item.company}</li>
                            <li className='text-center bg-gray-300 border  border-blue-400 text-white font-semibold  py-1 space-x-1 w-[245px] '><button className='bg-red-700 px-3 rounded' onClick={() => deleteItem(item._id)}>Delete</button>
                            <Link className='bg-green-700 px-3 rounded' to={`/update_product/${item._id}`} >Update</Link>
                            </li>
                        </ul>
                    ))
                }
            </div>
    )
}

export default Products
