import React from 'react'

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between item-center max-w-6xl mx-auto p-3'>
        <h1 className='front-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>SR</span>
             <span className='text-slate-700'>Estate</span>
        </h1>
        <from className='bg-slate-100 p-3 rounded-lg'>
          <input type="text" placeholder='search...' className='bg-transparent'/>
        </from>
        </div>
        </header>
  )
}
