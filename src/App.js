import "./App.css";
import Navbar from "./components/pages/Navbar";
import AboutMe from "./components/pages/AboutMe"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path ="/AboutMe">
            <AboutMe /> 
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
