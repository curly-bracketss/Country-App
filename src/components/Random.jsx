import React from 'react'
import { Link } from 'react-router-dom'
function Random({ name, region, population, area, capital, flag,alpha3Code }) {

    return (
        <>
            <Link to={`/details/${alpha3Code}`}>
                <div className=" shadow-md  dark:bg-gray-50 max-w-5xl  dark:text-gray-900 gap-3 flex">
                    <img src={flag} alt="" className="object-cover w-2xl dark:bg-gray-500" />
                    <div className='p-6 space-y-2 lg:shadow-xl w-xl border-b-[2px] border-violet-500 md:border-0  '>
                        <h2 className="text-3xl min-h-10 font-bold tracking-wide ">{name}</h2>
                        <p className='h-10 text-[#8b5cf6] font-semibold underline'>
                            {region}
                        </p>
                        <p className="dark:text-gray-800 text-md">Capital: {capital}</p>
                        <p className="dark:text-gray-800 text-md">Area: {area}km<sup>2</sup></p>
                        <p className="dark:text-gray-800 text-md">Population: {population}</p>

                    </div>
                </div>
            </Link>
        </>
    )
}


export default Random