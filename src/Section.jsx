import React, { useState, useEffect } from 'react';
import Continent from './components/Continent.jsx';
import Random from './components/Random.jsx';
import Header from './components/Header.jsx';
function Section() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error("Failed to fetch countries:", error));
  }, []);

  
  const randomIndex = data.length > 0 ? Math.floor(Math.random() * data.length) : null;
  const item1 = data[randomIndex]

  return (
    <main className='bg-[#E5E7EB] dark:bg-gray-800 flex-col items-center'>
      <Header />
      {item1 && (
        <div className='flex items-center justify-center py-10'>
          <Random key={item1.numericCode} {...item1} />
        </div>
      )}
      <Continent  data={data}/>

    </main>
  );
}

export default Section;
