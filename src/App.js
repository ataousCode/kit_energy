import './App.css';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import ContactForm from './components/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <h1 className='p-4 m-5 text-center'>COMING SOON...</h1>
      <Footer />

      <BrowserRouter>
      <Routes>
        {/* Handle routings later */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
