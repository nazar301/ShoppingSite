import Store from './pages/Store'
import Success from './pages/Success'
import Cancel from './pages/Cancel'
import './App.css'
import {Container} from 'react-bootstrap'
import NavBarComponent from './components/NavBarComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Container>    
    <NavBarComponent>
      <BrowserRouter>
      <Routes>
        <Route index element={<Store/>}></Route>
        <Route path='success' element={<Success/>}></Route>
        <Route path='cancel' element={<Cancel/>}></Route>
      </Routes>
      </BrowserRouter>
    </NavBarComponent>
  </Container>

  );
}

export default App;
