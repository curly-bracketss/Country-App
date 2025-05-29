import React from 'react'
import {Link, useParams } from 'react-router-dom'

function Details({ data }) {
    const { selCntry } = useParams()
    const selCntryData = data.find((item) => item.alpha3Code === selCntry)

    return (
        <>
            <div className=' dark:bg-gray-800 shadow-md h-[80vh] flex items-center justify-center'>
                <div className='flex   items-center h-[40vh] w-[80vw]'>
                    <div className='shadow-md h-full w-full flex flex-col p-5 gap-5'>
                        <p>{selCntryData.alpha3Code}</p>
                        <h2 className="text-3xl min-h-10 font-bold tracking-wide ">{selCntryData.name}</h2>
                        <p className="dark:text-gray-800 text-md">Capital: {selCntryData.capital}</p>
                        <p className="dark:text-gray-800 text-md">Region: {selCntryData.region}</p>
                        <p className="dark:text-gray-800 text-md">Alternative names: {selCntryData.nativeName}</p>
                        <div className='flex gap-3'>

                            {selCntryData.borders?.map((item) => {
                                return <Link to={`/details/${item}`} className='bg-gray-600 px-3  text-white text-s'>{item}</Link>
                            })}

                        </div>
                        <div className="mt-6 mb-2 gap-2.5 flex items-center text-gray-600" >
                            <p className="dark:text-gray-800 text-md">Population: {selCntryData.population}</p>
                            <span className="block text-md">{selCntryData.area}km<sup>2</sup></span>
                        </div>
                    </div>
                    <img src={selCntryData.flag} alt="" className='w-[40%] h-full object-cover' />

                </div>
            </div>
        </>
    )
}

export default Details