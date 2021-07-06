import './main.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Form from './components/forms';
import Cases from './components/cases';
import Sources from "./components/sources";
import Action from './components/action_call';
import Cases_second from './components/second_cases';
import Interview from './components/interview';
import Footer from './components/footer';




function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Form></Form>
      <Cases></Cases>
      <Sources></Sources>
      <Action></Action>
      <Cases_second></Cases_second>
      <Interview></Interview>
      <Footer></Footer>
    </div>
  );
}

export default App;
