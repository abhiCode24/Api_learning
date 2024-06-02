import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  
  const [food, setFood] = useState([])
  const [err, setErr] = useState(false)     // THIS IS FOR SETTING ERRORS TRY CATCH MAI KI ERROR H TOH MSG BHIJVA DO
  const [loading, setLoading] = useState(false)  // YE USKE LIYE KI WAIT KRO DATA AARA H API CALL HOKR TOH VO DIKHANE K LIYE
  const [search, setSearch] = useState('');      // YE SEARCH VAALI FUNCTIONALITY KE LIYE
  useEffect(()=>{
    (async()=>{
      try {
      setErr(false);
      setLoading(true);

      const response = await axios.get('/api/foodprod?search=' + search)       
      console.log(response.data)                              
      setFood(response.data)

      setLoading(false);

      } catch (error) {
        setErr(true);
        setLoading(false);
      }                                  
    })()
  },[search])      
  
  // if(err){
  //   return <h1>Something went wrong</h1>
  // }

  // if(loading){
  //   return <h1>Loading...</h1>
  // }

  return (
    <>
      <div>
        <h1>Learning API...</h1>
        <input type="text"
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
         />
        {err && (<h2>Something went wrong</h2>)}
        {loading && (<h2>Loading...</h2>)}
        <h3>My food Items list are : {food.length}</h3>
      </div>
        
    </>
  )
}

export default App

// { axios humne use kia backend ki api ko frontend mai call krke use krne ke liye
// and yaha humne async await use kia h baaki .then vagera bhi use hota h
// async await hum jab use krte h jab hum chahe ki bs yahi ruk jaaye code jab tk uske ander ka kaam na ho...}

// { Ab ye jaruri nahi h ki api request maari h toh vo puri hi ho error bhi aa skti h toh vo case bhi handle kro }