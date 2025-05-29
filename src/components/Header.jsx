import React, { useState } from 'react';

function Header() {
  const [search, setSearch] = useState(false);
  const [name, setName] = useState("");

  function toggleSearch() {
    setSearch(prev => !prev);
  }

  const scroll = () => {
    window.scrollTo({
      top: 500,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <header className='bg-[#E5E7EB] h-[50vh] w-full flex-col gap-10 justify-center flex items-center'>
        <h1 className='text-5xl font-bold'>Welcome to CountryApp Website</h1>
        <h2 className='text-4xl font-bold text-[#9573FF]'>
          You can find data of any country in this website.
        </h2>
        <div className='flex gap-3'>
          <button
            className='w-40 py-3 radius-10 rounded-md bg-[#9573FF] text-white font-bold uppercase hover:bg-[#8177d1]'
            onClick={scroll}
          >
            have a look
          </button>
          <button
            className='w-40 py-3 radius-10 rounded-md bg-black text-white font-bold uppercase'
            onClick={toggleSearch}
          >
            {search ? 'close search' : 'search'}
          </button>
        </div>

        {search && (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Search for a country..."
            className='mt-4 px-4 py-2 border rounded-md w-64'
          />
        )}
      </header>
    </>
  );
}

export default Header;
