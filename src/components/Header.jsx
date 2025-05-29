import React from 'react'

function Header() {
  return (
    <>
    <header className='bg-[#E5E7EB] h-[50vh] w-full flex-col gap-10 justify-center flex items-center'>
        <h1 className='text-5xl font-bold'>Welcome to CountryApp Website</h1>
        <h2 className='text-4xl font-bold text-[#9573FF]'>
        You can find data of any country in this website.</h2>
        <div className='flex gap-3'>
        <button className='w-40 py-3 radius-10  rounded-md bg-[#9573FF] text-white font-bold uppercase hover:bg-[#8177d1]'>have a look</button>
        <button className='w-40 py-3 radius-10 rounded-md bg-black text-white font-bold uppercase'>search</button>
        </div>
    </header>
    </>
  )
}

export default Header