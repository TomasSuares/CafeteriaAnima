import PropTypes from 'prop-types';
import './FiltraCategoria.css'; 
import FiltraProductos from './FiltraProductos';

export default function FiltraCategoria({ productos }) {
  const categorias = [...new Set(productos.map(producto => producto.categoria))];

  return (  
    <div className="container">
      {categorias.map(categoria => (
        <div key={categoria} className="categoria">
          <h2>{categoria}</h2>
          <FiltraProductos productos={productos} categoria={categoria} />
        </div>
      ))}
    </div>
  );
}

FiltraCategoria.propTypes = {
  productos: PropTypes.arrayOf(PropTypes.shape({
    categoria: PropTypes.string.isRequired,
    precio: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
  })).isRequired,
};