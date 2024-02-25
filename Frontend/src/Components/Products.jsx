import React, { useEffect, useState } from 'react'

const Products = () => {
    let [data, setData] = useState(null)
    let [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await fetch("http://localhost:5000/products");
                let jsonData = await response.json();
                setData(jsonData)
            }

            finally {
                setLoading(false)
            }
        }


        fetchData();
    }, [])
    console.log(data);

    return (
        loading ? <h1>Data is Loading</h1> :
            <din className=' bg-blue-600 px-28 py-16 block'>
                <div className=' grid grid-cols-3 gap-5 '>
                    {
                        data.map((item, index) => (
                            <div key={index} className='bg-white px-6 py-8 rounded shadow-xl space-y-5'>
                                <h1 className='text-center font-bold text-2xl'>Product No# {index+1}</h1>
                                <h1><span className='text-xl font-semibold'>Name:</span> {item.name}</h1>
                                <h1><span className='text-xl font-semibold'>Price:</span> {item.price}</h1>
                                <h1><span className='text-xl font-semibold'>Category:</span> {item.category}</h1>
                                <h1><span className='text-xl font-semibold'>Company:</span> {item.company}</h1>
                            </div>
                        ))
                    }
                </div>
            </din>
    )
}

export default Products
