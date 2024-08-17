import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';


function App(props) {
  const{json}=props
  JSON.stringify(json)
  return <>
    <Header/>
    <Home/>
    <Footer/>

    </>
    
}


export default App;
