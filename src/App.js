import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Classes from './components/Classes/Classes';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Teachers from './components/Teachers/Teachers';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route exact path="/home">
          <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/classes">
            <Classes></Classes>
          </Route>
          <Route path="/teachers">
            <Teachers></Teachers>
          </Route>
          
        </Switch>
        <Footer></Footer>
        
      </Router>
      
      
    </div>
  );
}

export default App;
