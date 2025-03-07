import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home.tsx";
import Navbar from "./components/navbar.tsx";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import Footer from "./components/footer.tsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
