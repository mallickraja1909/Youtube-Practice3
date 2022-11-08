import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Header from "./Compo/Header";
import "./Styles/App.scss";

import './Styles/mediaquery.scss';

import Home from "./Compo/Home";
import Footer from "./Compo/Footer";
// import './App.css';
import Contact from "./Compo/Contact";
import Service from "./Compo/Service";
function App() {
  return (
   
<Router>
<Header/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/service" element={<Service/>}/>
    <Route path="/contact" element={<Contact/>}/>
    </Routes> 
    {/* <Contact/> */}
  <Footer/>
</Router>


  );
}

export default App;
