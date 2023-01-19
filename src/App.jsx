import logo from './logo.svg';
import './App.css';
import AllRoutes from './AllRoutes/AllRoutes';
import Navbar from './AllRoutes/Navbar';
import CarCarousel from "./components/CarCarousel"
import Picdiv from './components/Picdiv';
import CardCarousel from "./components/CardCarousel"
import Picdiv2 from './components/Picdiv2';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
    
      <Navbar />
     <AllRoutes />
     <CarCarousel />
     <Picdiv />
     <CardCarousel />
     <Picdiv2 />
    <Footer />
    </div>
  );
}

export default App;
