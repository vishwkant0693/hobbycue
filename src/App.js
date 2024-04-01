import './App.css';
import Footer from './components/header&footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Main from './components/Main/Main';

function App() {
  return (
    <>
      {/* <Header/>
      <Hero/>
      <Main /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
