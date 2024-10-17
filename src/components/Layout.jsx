import {Link} from 'react-router-dom';
const Layout = (/*{children}*/) => {
  return (
    <div>
      <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/people">Consulta</Link></li>
      <li><Link to="/people/new">Alta</Link></li>
      <li><Link to="/people/update">Modificacion</Link></li>
      </ul>
      {/* {children} */}
    </div>
  );
};

export default Layout;