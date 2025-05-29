import React, { useState, useEffect } from 'react';
import Cards from './components/Cards.jsx';
import Random from './components/Random.jsx';

function Section({ continent }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error("Failed to fetch countries:", error));
  }, []);

  const filteredData = continent
    ? data.filter(item => item.region === continent)
    : data;

  const randomIndex = data.length > 0 ? Math.floor(Math.random() * data.length) : null;
  const item1 =data[randomIndex] 

  return (
    <main className='bg-[#E5E7EB] dark:bg-gray-800 flex-col items-center'>
      {item1 && (
        <div className='flex items-center justify-center py-10'>
          <Random key={item1.numericCode } item1={item1} />
        </div>
      )}

      <div className="all py-10 min-h-[100vh] scroll-smooth">
        <section className='flex gap-3 justify-evenly flex-wrap max-w-[1400px] mx-auto'>
          {filteredData.map((item, index) => (
            <Cards key={index} {...item} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default Section;
