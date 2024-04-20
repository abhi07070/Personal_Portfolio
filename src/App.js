import React, { useEffect, useState } from 'react';
import './App.css';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Experience from './Pages/Experience/Experience';
import Footer from './Pages/Footer/Footer';
import LandingPage from './Pages/LandingPage/LandingPage';
import Proficiency from './Pages/Proficiency/Proficiency';
import Project from './Pages/Project/Project';
import HashLoader from "react-spinners/HashLoader";
import Education from './Pages/Education/Education';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className='App'>
          <HashLoader color={"#1171ef"} loading={loading} size={30} />
        </div>
      ) : (
        <>
          <LandingPage />
          <About />
          <Proficiency />
          <Education />
          <Experience />
          <Project />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
