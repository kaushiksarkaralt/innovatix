import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home.tsx";
import Navbar from "./components/navbar.tsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
