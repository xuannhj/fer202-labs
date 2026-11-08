
import React from 'react'
import { Route, Routes } from 'react-router'
import MyNavBar from './components/MyNavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import PizzaNight from './pages/PizzaNight'
import PizzaManagement from './pages/PizzaManagement'
import AddPizza from './pages/AddPizza';
import EditPizza from './pages/EditPizza';

export default function App() {
  return (
    <>
    <MyNavBar/>
    <Routes>
      <Route path='/' element ={<PizzaNight/>}/>
      <Route path='/se201170' element ={<PizzaNight/>}/>
      <Route path='/se201170/pizza-night' element = {<PizzaNight/>}/>
      <Route path='/se201170/pizza-management' element={<PizzaManagement/>}/>
      <Route path='/se201170/add-pizza' element = {<AddPizza></AddPizza>}></Route>
      <Route path='/se201170/edit-pizza/:id' element ={<EditPizza/>}/>
    </Routes>
    </>
  )
}

