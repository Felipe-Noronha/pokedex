import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Homepage from './pages/Homepage';
import PokemonPage from './pages/PokemonPage';
import Header from './components/Header';


function App() {
  return (
      <Router>
        <Header/>
        <Container>
          <Routes>
            <Route exact path='/' element={<Homepage/>}/>
            <Route path='/pokemon/:id' element={<PokemonPage/>}/>
          </Routes>
        </Container>
      </Router>
  );
}

export default App;
