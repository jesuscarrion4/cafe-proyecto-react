import './App.css';
import ColorSchemesExample from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Container from 'react-bootstrap/esm/Container';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <div className="App">
      <Container >
      <BrowserRouter>
      <ColorSchemesExample />
        <Routes>
          <Route path="/" element={ <ItemListContainer/> } />
          <Route path="/categoria/:idCategoria" element={ <ItemListContainer/> } />
          <Route path="/item/:idItem" element={ <ItemDetailContainer/> }  />
          <Route path="*" element={<h2>Sitio en Construcción</h2>} />
        </Routes>
      </BrowserRouter>

      </Container>
    </div>
    
  );
}

export default App;


//<ColorSchemesExample />
//<Container >

//<ItemListContainer greeting='Bienvenidos' />
//
//</Container>