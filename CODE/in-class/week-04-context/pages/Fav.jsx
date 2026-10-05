import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { FavContext } from '../src/contexts/FavContext'
export default function Fav() {
    //len context de lay danh sach yeu thich cua nguoi dung
    const {fav} = useContext(FavContext)
    console.log(fav)
  return (
    <>
    {
        fav.map(item => <>
        <h3> {item.id}</h3>
        <h2> {item.name}</h2>
        </>
        )
    }
    <Link to="/">Go to Home</Link>
    </>
  )
}
