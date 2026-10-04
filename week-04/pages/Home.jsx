import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { FavContext } from '../src/contexts/FavContext'
export default function Home() {
    const data = [
        {
            "id": 1,
            "name": "banhflan"
        }, 
        {
            "id": 2,
            "name": "banhmi"
        },
        {
            "id": 3,
            "name": "banhxeo"
        }

    ]
    const { addToFav } = useContext(FavContext);
  return (
    <>
      {data.map(item => (
        <>
        <h2> {item.id} </h2>
        <h3> {item.name} </h3>
        <button onClick={() => addToFav(item)} >Add to fav</button>
        </>
      ))}
      <br></br>
      <Link to="/fav">Go to Fav</Link>
    </>
  )
}
