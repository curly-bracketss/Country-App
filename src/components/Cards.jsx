import React from 'react'

function Cards({ name, capital, flag, area, population, region }) {
    return (
        <>
            <div className="w-xs shadow-md dark:bg-gray-50 bg-white dark:text-gray-900">
                <img src={flag} alt="" className="object-cover w-full h-50 dark:bg-gray-500" />
                <div className='p-3'>
                    <p className='h-10'>
                        {region}
                    </p>
                    <h2 className="text-xl h-10  font-semibold tracking-wide italic">{name}, {capital}</h2>

                    <div className="mt-6 mb-2 gap-2.5 flex items-center text-gray-600" >
                        <p className="dark:text-gray-800 text-md">Population: {population}</p>
                        <span className="block text-md">{area}km<sup>2</sup></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards