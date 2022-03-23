import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Aboutus from "./Aboutus";
import Airports from "./Airports";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Switch>
          <Route path="/" exact component={Aboutus} />
        </Switch>
        <Switch>
          <Route path="/" exact component={Airports} />
        </Switch>
        <Switch>
          <Route path="/" exact component={Form} />
        </Switch>
        <Switch>
          <Route path="/" exact component={Footer} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
