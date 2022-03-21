import Home from "./Home";
import Navbar from "./Navbar";
import { Routes, Router, Route } from "react-router-dom";
import Aboutus from "./Aboutus";
import Airports from "./Airports";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/" exact component={Aboutus} />
          <Route path="/" exact component={Airports} />
          <Route path="/" exact component={Form} />
          <Route path="/" exact component={Footer} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
