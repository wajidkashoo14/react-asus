import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Allpages from "./Allpages";
import Thankyou from "./Thankyou";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Allpages} />
        </Switch>
        <Switch>
          <Route path="/thankyou" exact component={Thankyou} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
