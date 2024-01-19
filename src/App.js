
import './App.css';
import { Community } from './components/Community';
import { MainContainer } from './components/MainContainer';
import { Navbar } from './components/Navbar';
import { Product } from './components/Product';
import { Roadmap } from './components/Roadmap';
import { Token } from './components/Token';

function App() {
  return (
    <div className='bg-gradient from-[#0E0E0E] to-[#0E0E0E00] '>
      <Navbar />
      <MainContainer />
      <Product />
      <Roadmap />
      <Token />
      <Community />
    </div>

  );

}
export default App;
