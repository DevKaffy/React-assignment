import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="px-8 py-4">
      <div className="flex items-center gap-x-2 mb-2">
        <img className="h-7 w-7" src="/public/svg/menu-5-fill.svg" alt="" />
        <p className="text-white font-extrabold ">Userhive</p>
      </div>
      <div className="flex gap-2 text-white">
        <p>Copyright © 2023.</p>
        <p>All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer