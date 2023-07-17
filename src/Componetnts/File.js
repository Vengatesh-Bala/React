import react from 'react'
import { useNavigate } from 'react-router-dom'
// import Test from './Test'

export function File(params) {
    let navigate =useNavigate()
    return (
        <>
      <h1>
        Hello World 
      </h1>
      <button onClick={()=>{navigate('/test')}} > OK  </button>
        </>
    )
}
export function File2(params) {
    let navigate =useNavigate()
    return (
        <>
      <h1>
        Hello  
      </h1>
      <button onClick={()=>{navigate('/test')}} > OK  </button>
        </>
    )
}