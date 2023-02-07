import React from 'react'
import { elements } from '../data/elements';
import Moving from './section-two/Moving';
import './App.css'


const App = () => {
  return (
    <div className="overflow-auto">
      <section className="section-one bg-[#131415] lg:h-screen px-8 overflow-auto">
        <h1 className="text-white text-5xl font-extrabold mb-8 pt-20">
          A <span className="text-focus font-semibold text-4xl lg:text-6xl">turn-key</span> approach to continuous
          user discovery
        </h1>
        <h4 className="text-[gray] font-semibold mb-6">
          You've got a lot to take on so we take user research off your plate.
        </h4>
        <h3 className="mb-6 text-2xl font-bold text-white">How we work</h3>
        <div className="lg:flex gap-6 grid md:grid-cols-2 sm:grid-cols-1 ">
          {elements.map((element, index) => (
            <div key={`elements-${index}`}>
              <div className="flex flex-col text-white gap-4">
                <div className="flex items-center justify-center bg-[#6968f7] w-12 h-12 rounded-full">
                  <img className="w-6 h-6" src={element.img} alt="" srcset="" />
                </div>
                <h4 className="font-bold">{element.title}</h4>
                <p className="w-[18rem] text-[gray]">{element.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Moving/>
    </div>
  );
}

export default App