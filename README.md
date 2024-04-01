"Thanks for the opportunity! 
I'm Vishwkant,
A ReactJS developer with a fresh perspective and a hunger for learning, 
I recently completed a 9-month full-stack developer course from DUCAT Pitampura and building a strong foundation in modern web technologies.
Prior to this, I gained hands-on experience during a 2-month internship/training at Krenai IT Solutions, where I got a taste of real-world project dynamics.
Excited to contribute my skills to innovative projects."

In this project there is an issue,
When I deploy the project on netlify with the react-router-dom, it doesn't navigate to the given path,
because of that i deploy it as two projects,

homepage link :- https://hobbycuetest.netlify.app/
signin page link :- https://hobbycue-sign-in.netlify.app/


# App.js

import './App.css';
import Footer from './components/header&footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Main from './components/Main/Main';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/sign-in' element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;


