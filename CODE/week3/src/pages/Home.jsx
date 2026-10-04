// import React from 'react'
// import { Link } from 'react-router'
// //trong react se ko dung href de chuyen trang, ma se dung component <Link/> cua React Router
// export default function Home() {
//   return (
//     <><div>Home</div>
//     <Link to='/products'>Go to Products</Link>
//     </>
//   )
// }

import React from 'react'
//show info
//khi ma bam vo -> nhay sang 1 trang khac hien thi drama do
import { Link } from 'react-router'
import { data } from '../../data'

export default function Home() {
  return (
    <>
    {data.map(item =>
      <>
      <h1>_____________</h1>
      <h3>
        {item.name}
      </h3>
      <Link to ={`/drama/${item.id}`}>
      <h4>
        {item.drama}
      </h4></Link>
      </>
    )}
    </>
  )
}
//template string - template literal -> lay gtri thay vi no la chuoi thi bien no thanh bien 
