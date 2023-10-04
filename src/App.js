import './App.css';
import Hero from './data/component/hero/Hero';
import Program from './data/component/Programs/Program';
import Reasons from './data/component/Reasons/Reasons';
import Plans from './data/component/Plans/Plans';
import Testimonial from './data/component/Testimonial/Testimonial';
import Join from './data/component/Plans/Join/Join';
function App() {
  return (
    <div className="App">
          <Hero/>
          <Program/>
          <Reasons/>
          <Plans/>
          <Testimonial/>
          <Join/>
    </div>
  );
}

export default App;
