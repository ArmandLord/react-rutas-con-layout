import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <Link to="/" className="logo">
        Logo
      </Link>
      <Link to="/">Home</Link>
      <Link to="/contacto">Contacto</Link>
    </div>
  );
};
