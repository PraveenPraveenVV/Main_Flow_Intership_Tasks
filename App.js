import './App.css';
import Home from './Componnent/Home';
import About from './Componnent/About';
import Work from './Componnent/Work';
import Testimonial from './Componnent/Testimonial';
import Contacts from './Componnent/Contacts';
import Footer from './Componnent/Footer';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Work/>
      <Testimonial/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
