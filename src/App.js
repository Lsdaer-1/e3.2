import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import './App.css';
import Footer from './Footer';
import React, { useState } from 'react';
import PhotoCarousel from './PhotoCarousel';
import GuideModal from './GuideModal';
import Results from './Results';
import CenteredTextBox from './CenteredTextBox';
import Activities from './Activities';
function App() {
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const clearSelections = () => {
    setSelectedCategories([]);
  };

  return (
    <>
    <Router>
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <PhotoCarousel />
      <CenteredTextBox />
      <Activities />
      <Home />
      <Routes>  
          <Route path="/results" element={<Results />} />
        </Routes> 
        
      <Footer />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </Router>
    </>
  );
}

export default App;

function Home() {
  return (
    <div>
      <section id="home">
      <div className="home">
        <h2>Starting our life in Canada</h2>
        <p>You can search for what you want by using the Guide button on the navigation bar.</p>
      </div>
      </section>
      
    </div>
  );
}
