import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer  from './components/Footer';
import AboutMe  from './components/AboutMe';
import Contact  from './components/Contact';
import Portfolio  from './components/Portfolio';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Router>   
      <Header/>   
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/AboutMe' element={<AboutMe />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Portfolio' element={<Portfolio />} />
      </Routes>
      <Footer />
   </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
