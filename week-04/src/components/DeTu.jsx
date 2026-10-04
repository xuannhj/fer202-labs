import React, { useContext } from 'react'
import { HangDongContext } from '../contexts/HangDongContext'

export default function DeTu() {
    const { biKip } = useContext(HangDongContext)
    console.log(biKip)
  return (
    <div>De tu Da lay dc bi kip: {biKip}</div>
  )
}
