import "./index.css";

export const Card = ({ children, title = "sin titulo" }) => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "1rem",
        borderRadius: "5px",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        width: "300px",
      }}
    >
      <h1>{title}</h1>
      <div>{children}</div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="home">
      Home desde Pages
      <Card title="titulo">
        <img src="https://picsum.photos/200/300" alt="imagen" />
      </Card>
      <Card>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque sit,
          quam maiores accusantium maxime ut velit ipsam distinctio doloribus ex
          repellendus! Molestias perferendis sed sapiente rerum exercitationem
          eveniet reiciendis mollitia.
        </p>
      </Card>
    </div>
  );
};

export default Home;
