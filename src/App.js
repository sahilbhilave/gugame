import './style.css';
import Navbar from './components/Navbar';
import Box from './components/Box';
import Number from './components/Number';
import Score from './components/Score';
import Choice from './components/Choice';

function App() {
  //All the sessions are set to default value 0
  sessionStorage.setItem("score", "0");
  sessionStorage.setItem("t1", "0");
  sessionStorage.setItem("start", "0");

  return (
    <>
    <Navbar></Navbar>
    <Number></Number>
    <Score></Score>
    <Choice></Choice>
    <Box></Box>
    </>
  );
}

export default App;
