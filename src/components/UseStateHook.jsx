import { useState } from 'react'

const UseStateHook = () => {
  const [count, setCount] = useState(0)

  return (
    <div className='m-12 bg-orange-500 rounded-xl text-white shadow-lg p-10'>
      <h1 className='text-center text-5xl mb-10 font-bold'>useState Hook</h1>
      <div className='flex flex-row items-center justify-center'>
        <button
          onClick={() => setCount(count + 1)}
          className='border-2 border-white w-[100px] h-[100px] text-3xl font-bold rounded-2xl m-1 hover:bg-white hover:text-orange-500'>
          +1
        </button>
        <p className='text-7xl px-10 font-bold'>{count}</p>
        <button
          onClick={() => setCount(count - 1)}
          className='border-2 border-white w-[100px] h-[100px] text-3xl font-bold rounded-2xl m-1 hover:bg-white hover:text-orange-500'>
          -1
        </button>
      </div>
    </div>
  )
}

export default UseStateHook
