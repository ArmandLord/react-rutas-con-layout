import { Navbar } from "../ui/navbar/Navbar";

export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div
        style={
          {
            // backgroundColor: "#4fa7ff",
            // padding: "1rem",
          }
        }
      >
        {children}
      </div>
      <footer style={{ display: "flex" }}>footer</footer>
    </div>
  );
};
