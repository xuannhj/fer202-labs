
import './App.css'
import MyNavBar from './components/MyNavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router'
import LaptopCollection from './pages/LaptopCollection';
import LaptopManagement from './pages/LaptopManagement';
import AddLaptop from './pages/AddLaptop';
import EditLaptop from './pages/EditLaptop';

function App() {

  return (
    <>
<MyNavBar/>
      <Routes>
      <Route path='/' element ={<LaptopCollection/>}/>
      <Route path='/se201170' element ={<LaptopCollection/>}/>
      <Route path='/se201170/laptop-collection' element = {<LaptopCollection/>}/>
      <Route path='/se201170/laptop-management' element={<LaptopManagement/>}/>
      <Route path='/se201170/add-laptop' element = {<AddLaptop/>}></Route>
      <Route path='/se201170/edit-laptop/:id' element ={<EditLaptop/>}/>
    </Routes>
    </>
  )
}

export default App
