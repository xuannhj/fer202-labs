import './App.css'
import MyNavBar from './components/MyNavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import SneakerCollection from './pages/SneakerCollection'
import { Route, Routes } from 'react-router'
import SneakerManagement from './pages/SneakerManagement';
import AddSneaker from './pages/AddSneaker';
import EditSneaker from './pages/EditSneaker';


function App() {

  return (
    <>
    <MyNavBar/>
      <Routes>

      <Route path='/' element ={<SneakerCollection/>}/>
      <Route path='/se201170' element ={<SneakerCollection/>}/>
      <Route path='/se201170/sneaker-collection' element = {<SneakerCollection/>}/>
      <Route path='/se201170/sneaker-management' element={<SneakerManagement/>}/>
      <Route path='/se201170/add-sneaker' element = {<AddSneaker/>}></Route>
      <Route path='/se201170/edit-sneaker/:id' element ={<EditSneaker/>}/>
    </Routes>
    </>
  )
}

export default App
