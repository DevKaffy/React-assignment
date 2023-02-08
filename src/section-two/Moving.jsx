import React from 'react'
import { enterprises } from '../../data/elements';
import './Moving.css'

const Moving = () => {

  return (
    <section className="bg-black px-8 py-[5rem] text-white">
      <h2 className="text-4xl lg:text-6xl sm:text-4xl mb-24 text-center font-extrabold">
        Let's get
        <span className="text-background"> moving</span>
      </h2>
      <div className="bg-[#131415] grid lg:grid-cols-3 gap-8 px-[2rem] place-items-center py-8">
        {enterprises.map((enterprise, index) => (
          <div
            key={`enterprises-${index}`}
            style={{
              background: enterprise.color,
              borderRadius: "5px",
              padding: "2rem",
              width: "22rem",
              height: "32rem"
            }}
          >
            <div className="text-4xl font-extrabold mb-6">
              {enterprise.heading}
            </div>
            <p className="mb-8">{enterprise.title}</p>
            <p>{enterprise.subtitle}</p>
            <ul className="pl-6 list-disc mb-8">
              <li>{enterprise.item1}</li>
              <li>{enterprise.item2}</li>
              <li>{enterprise.item3}</li>
              <li>{enterprise.item4}</li>
            </ul>
            <h4 className="font-extrabold text-2xl mb-8">
              {enterprise.amount}
            </h4>
            <button className="bg-[#5e5df0] grid mx-auto px-7 py-3 rounded-full">Let's go</button>
          </div>
        ))}
      </div>
    </section>
  );
  
}

export default Moving