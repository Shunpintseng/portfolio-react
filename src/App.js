import "./App.css";
import Navbar from "./components/pages/Navbar";
import AboutMe from "./components/pages/AboutMe";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>

        <Route exact path ="/">
            <AboutMe /> 
          </Route>

          <Route path ="/AboutMe">
            <AboutMe /> 
          </Route>

          <Route path ="/Contact">
            <Contact /> 
          </Route>

          <Route path ="/Resume">
            <Resume /> 
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
