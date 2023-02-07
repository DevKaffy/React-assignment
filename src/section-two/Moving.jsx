import React from 'react'
import { enterprises } from '../../data/elements';
import './Moving.css'

const Moving = () => {

  return (
    <section className="bg-black lg:h-screen px-8 py-[5rem] text-white">
      <h2 className="text-4xl lg:text-6xl sm:text-4xl mb-24 text-center font-extrabold">
        Let's get
        <span className="text-background"> moving</span>
      </h2>
      <div className="bg-[#131415] grid grid-cols-3 px-4 py-4">
        {enterprises.map((enterprise, index) => (
          <div key={`enterprises-${index}`}>
            <div>
              <div>{enterprise.heading}</div>
              <div>{enterprise.title}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
  
}

export default Moving