import Navbar from './componenets/Navbar/Navbar';
import Button from './componenets/Button/Button';
import Header from './componenets/Header/Header';
import Intro from './componenets/Intro/Intro';
import Best from './componenets/Best/Best';
import Service from './componenets/Service/Service';
import './App.css';



function App() {
  return (
    <>
    <Header/> 
      
      <main>
        <Intro/>
        <Best/>
        <Service/>

      </main>
    </>
  );
}

export default App;
