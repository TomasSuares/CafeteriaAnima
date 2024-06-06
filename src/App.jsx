import { PRODUCTOS } from './productos.js';
import FiltraCategoria from './FiltraCategoria.jsx';


export default function App() {
  return (
    
    <div className="container" >
      <h1>Cafetería Anima</h1>
      <FiltraCategoria productos={PRODUCTOS} />
    </div>
  );
}