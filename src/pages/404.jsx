import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <h1>404</h1>
      <p>Not Found</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
};

export default NotFound;
