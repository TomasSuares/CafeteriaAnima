import PropTypes from 'prop-types';

export default function FiltraProductos ({ productos, categoria }){

  return (
    <div>
      <ul>
      {productos.filter(producto => producto.categoria === categoria && producto.stock > 0).map(producto => (
      <li key={producto.nombre}>
      <p>
      <b>{producto.nombre}:</b>
      {producto.categoria}
      Precio: {producto.precio}, Stock: {producto.stock}
      </p>
      </li>
      ))}
      </ul>
    </div>
  );
}

FiltraProductos.propTypes = {
  productos: PropTypes.arrayOf(PropTypes.shape({
    categoria: PropTypes.string.isRequired,
    precio: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
  })).isRequired,
  categoria: PropTypes.string.isRequired,
};