import React from 'react'
import { useState, useEffect } from 'react';


const Tip = () => {
    const [formData, setFormData] = useState({
        bill:"",
        custom:"",
        numberpeople:"",
    })
    const [amount, setAmount] = useState(null)
    const [total, setTotal] = useState(null)

    const handleChange = (event)=>{
        const {name, value, type, checked} = event.target

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })


        
        
    }
    useEffect (()=>{
        let calculateamount = (formData.bill * formData.custom)/100
        setAmount(calculateamount)
        
        let totalamount = ((formData.bill * formData.custom)/100) * formData.numberpeople
        setTotal(totalamount)
        

    },[formData])
    const handleSubmit= (e)=>{
        e.preventDefault()
    }

    
  return (
    <div className='tip md:m-auto md:w-5/12'>
        <div className='tip-body h-auto w-12/12'>
            <h2 className='text-center mt-20 text-4xl font-sans text-green-900 font-bold '>TIP APP</h2>

        </div>
        <div className='calculate w-12/12 mt-20 bg-white rounded-t-3xl p-6'>
            <div className='input-amount flex flex-col w-full'>
                <h1 className='text-blue-300 mb-4 font-medium'>Bill</h1>
                <div className='input '>
                    <input type='number' className='border rounded-md px-4 w-full text-right h-10 bg-gray-100 text-2xl text-green-900'
                    name='bill'
                    onChange={handleChange}
                    value={formData.bill}
                    
                    
                    />
                </div>

            </div>
            <div className='percents-div flex flex-col w-full mt-12'>
            <h1 className='text-blue-300 mb-4 font-medium'>Select Tip %</h1>
            <div className='percent-box grid grid-cols-2 gap-2 justify-items-center'>
                <div className='box-1 flex justify-center items-center bg-green-900 w-10/12 h-12 rounded-md text-white text-2xl font-medium hover:bg-green-500 hover:text-green-900' onClick={()=>{
        let calculateamount = (formData.bill * 5)/100
        setAmount(calculateamount)
        

        

    }}>
                    5%

                </div>
                <div className='box-1 flex justify-center items-center bg-green-900 w-10/12 h-12 rounded-md text-white text-2xl font-medium hover:bg-green-500 hover:text-green-900' onClick={()=>{
        let calculateamount = (formData.bill * 10)/100
        setAmount(calculateamount)

    }}>
                    10%
                    
                    </div>

                    <div className='box-1 flex justify-center items-center bg-green-900 w-10/12 h-12 rounded-md text-white text-2xl font-medium hover:bg-green-500 hover:text-green-900' onClick={()=>{
        let calculateamount = (formData.bill * 15)/100
        setAmount(calculateamount)
        

    }}>
                        15%
                    
                    </div>

                    <div className='box-1 flex justify-center items-center bg-green-900 w-10/12 h-12 rounded-md text-white text-2xl font-medium hover:bg-green-500 hover:text-green-900' onClick={()=>{
        let calculateamount = (formData.bill * 25)/100
        setAmount(calculateamount)
    }}>
                        25%
                    
                    </div>

                    <div className='box-1 flex justify-center items-center bg-green-900 w-10/12 h-12 rounded-md text-white text-2xl font-medium hover:bg-green-500 hover:text-green-900' onClick={()=>{
        let calculateamount = (formData.bill * 50)/100
        setAmount(calculateamount)

    }}>
                        50%
                    
                    </div>

                    <div className='box-1 flex justify-center items-center  w-10/12 h-12 rounded-md text-white text-2xl font-medium'>
                    <input type='number' className='border rounded-md px-4 w-full text-right h-12 bg-gray-100 text-2xl text-green-900 placeholder:text-green-900' placeholder='Custom'
                    name='custom'
                    onChange={handleChange}
                    value={formData.custom}  />
                    
                    </div>



            </div>
            <div className='input-amount flex flex-col w-full my-8'>
                <h1 className='text-blue-300 mb-4 font-medium'>Number of people</h1>
                <div className='input '>
                    <input type='number' className='border rounded-md px-4 w-full text-right h-10 bg-gray-100 text-2xl text-green-900'
                    name='numberpeople'
                    onChange={handleChange}
                    value={formData.numberpeople}
                      />
                </div>

            </div>

            </div>
            <div className='calculated w-full rounded-lg bg-green-900 text-white p-4 pt-8 grid grid-cols-1'>
                <div className='tips flex justify-between'>
                    <div className='boxes'>
                        Tip Amount
                        <span className='block text-gray-400'>/ person</span>

                    </div>
                    <div className='boxes text-3xl'>
                        ${amount}
                        
                        </div>

                </div>
                <div className='tips flex justify-between mt-8'>
                    <div className='boxes'>
                        Total
                        <span className='block text-gray-400'>/ person</span>

                    </div>
                    <div className='boxes text-3xl'>
                        ${total}
                        
                        </div>

                </div>
                <button className='bg-green-500 text-green-900 rounded-md w-11/12 m-auto font-bold mt-8 h-12' onClick={handleSubmit}>RESET</button>



            </div>


        </div>
    
    </div>
  )
}

export default Tip