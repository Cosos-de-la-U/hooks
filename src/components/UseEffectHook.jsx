import { useEffect, useState } from 'react'

const UseEffectHook = () => {
  const [phrase, setPhrase] = useState('')

  const getPhrase = async () => {
    const { phrase } = await fetch(
      'https://api.chucknorris.https://frasedeldia.azurewebsites.net/api/phrase/jokes/random'
    ).then((data) => data.json())
    console.log(phrase)
    setPhrase(phrase)
  }

  useEffect(() => {
    getPhrase()
  }, [])

  return (
    <div className='m-12 bg-blue-500 rounded-xl text-white shadow-lg p-10'>
      <h1 className='text-center text-5xl mb-10 font-bold'>useEffect Hook</h1>
      <div className='flex flex-col items-center justify-center'>
        <blockquote className='text-xl italic font-semibold'>
          <p className='my-3'>"{phrase}"</p>
        </blockquote>
        <button
          onClick={() => getPhrase()}
          className='my-10 p-2 border-white border-2 rounded-xl hover:bg-white hover:text-blue-500'>
          Dame una frase de Chuck Norris
        </button>
      </div>
    </div>
  )
}

export default UseEffectHook
