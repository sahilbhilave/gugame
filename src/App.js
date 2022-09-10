// import './App.css';
import './style.css';
import Navbar from './components/Navbar';
import Box from './components/Box';
import Number from './components/Number';
import Score from './components/Score';
import Choice from './components/Choice';
import Footer from './components/Footer';

function App() {
  sessionStorage.setItem("score", "0");
  sessionStorage.setItem("t1", "0");
  sessionStorage.setItem("start", "0");

  return (
    <>
    {/* <br></br><br></br> */}
    <Navbar></Navbar>
    <Number></Number>
    <Score></Score>
    <Choice></Choice>
    <Box></Box>
    <Footer></Footer>
    </>
  );
}

export default App;
