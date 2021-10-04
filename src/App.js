import React,{ useEffect, useState } from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Classes from './components/Classes/Classes';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Teachers from './components/Teachers/Teachers';


export const MainContext = React.createContext();

function App() {
  // load data 
  const[mainCarts,setMainCarts]= useState([])
  useEffect(()=> {
      fetch('./fakeData.JSON')
      .then(res => res.json())
      .then(data => setMainCarts(data))
      
  },[])

  return (
    <MainContext.Provider value={mainCarts}>
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
      <Route path="/blogs">
        <Blogs></Blogs>
      </Route>
          <Route path="*">
              <NotFound></NotFound>
          </Route>
        </Switch>
        
        <Footer></Footer>
        
      </Router>
      
      
    </div>
    </MainContext.Provider>
  );
}

export default App;
