import './styles/style.css';
import './App.css';
import Login from "./components/loginPage";
import Signup from "./components/signup";
import Home from "./components/home";
import {Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
    
      <div>           
          <Route path="/" exact component={Login} />     
          <Route path="/signup" component={Signup} />
          <Route path="/home" component={Home} />        
      </div>

    </div>
  );
}

export default App;
