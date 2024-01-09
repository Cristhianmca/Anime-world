import React from 'react'
import {data} from './animemock'
function Section() {

  return (
    <>
      <div className=''>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href=""target='_blank'>
          <img src={menuLogo} className='logo menu' alt="Menu logo" />
        </a> */}

        {data.map((item)=>(
          <div className='card' >
            <img className='card_img' src={item.img} alt='img' />
            <h2>{item.name}</h2>
            <p  > <span className=''>💎 Rank :</span>  {item.rank} </p>
            <p> 📖 Episodes : {item.episodes} </p>
            <p > 💯  Score : {item.score} </p>
             <p className='synopsis'><span className='span_synopsis'>Synopsis :</span>  {item.synopsis}</p>
          </div>
        ))}             
      </div>
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Pichan <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default Section
