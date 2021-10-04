import './App.css';
import Classes from './components/Classes/Classes';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';


function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <Home></Home> */}
      <Classes href="/ourclasses"></Classes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
