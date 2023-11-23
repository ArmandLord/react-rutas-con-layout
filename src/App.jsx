import { Route, Routes } from "react-router-dom";
import { Home, Contacto, NotFound } from "./pages";
import { Layout } from "./components/layouts/Layout";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
