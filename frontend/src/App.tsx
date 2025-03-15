import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home.tsx";
import Navbar from "./components/navbar.tsx";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import Footer from "./components/footer.tsx";
import Innovations from "./pages/Innovations.tsx";
import Projects from "./pages/Projects.tsx";
import Innovation from "./pages/Innovation.tsx";
import CreateInnovation from "./pages/CreateInnovation.tsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/innovations" element={<Innovations />} />
          <Route path="/projects" element={<Projects />} />

          <Route path="/innovation/:id" element={<Innovation />} />
          <Route path="/create/innovation" element={<CreateInnovation />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
