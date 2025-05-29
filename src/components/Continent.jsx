import React from 'react';
import Cards from './Cards.jsx';
import { useParams } from 'react-router-dom';
function Continent({ data}) {
    const { selCtnnt} = useParams()
  const filteredData = selCtnnt
    ? data.filter(item => item.region === selCtnnt)                                                     
    : data;

  return (
    <div className="all py-10 min-h-[100vh] scroll-smooth">
      <section className="flex gap-3 justify-evenly flex-wrap max-w-[1400px] mx-auto">
        {filteredData.map(item => (
          <Cards key={item.alpha3Code} {...item} />
        ))}
      </section>
    </div>
  );
}

export default Continent;
