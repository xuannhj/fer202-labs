
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Orchid from './components/Orchid';
import MyNavBar from './components/MyNavBar';
import { Button, Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

export default function App() {
  const [count, setCount] = useState(18);
  const [theme, setTheme] = useState('light');
  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <>
    <Navbar bg={theme} data-bs-theme={theme}>
  <Container>
    <Button onClick={handleTheme}>
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </Button>
  </Container>
</Navbar>

<br>
</br>
    <h3> Count: {count}</h3>
    <Button variant = 'primary' onClick = {
      () => {setCount(prev => prev + 1);
        console.log(count);
      }
    }>+</Button>  
    
    
      <MyNavBar />
      <Orchid />


    </>
  )
}
