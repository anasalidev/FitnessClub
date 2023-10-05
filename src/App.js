import './App.css';
import Hero from './data/component/hero/Hero';
import Program from './data/component/Programs/Program';
import Reasons from './data/component/Reasons/Reasons';
import Plans from './data/component/Plans/Plans';
import Testimonial from './data/component/Testimonial/Testimonial';
// import Join from './data/component/Plans/Join/Join';
// import Footer from './data/component/Footer/Footer';
function App() {
  return (
    <div className="App">
          <Hero/>
          <Program/>
          <Reasons/>
          <Plans/>
          <Testimonial/>
          {/* <Join/>
          <Footer/> */}
    </div>
  );
}

export default App;
