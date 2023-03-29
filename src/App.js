import './App.css';
import ColorSchemesExample from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Container from 'react-bootstrap/esm/Container';




function App() {
  return (
    <div className="App">
      <ColorSchemesExample />
      <Container >
      
      <ItemListContainer greeting='Bienvenidos' />
      </Container>
    </div>
    
  );
}

export default App;
