import React from 'react';
import { useLocation } from 'react-router-dom';
import './Results.css';

function Results() {
  const location = useLocation();
  const { selectedCategories } = location.state || {};

  return (
    <div className="results-container">
      <h2>Search Results</h2>
      <div className="selected-categories">
        {selectedCategories && selectedCategories.length > 0 ? (
          selectedCategories.map((category, index) => (
            <span key={index} className="category-item">{category}</span>
          ))
        ) : (
          <p>Please select the category from the GUIDE on the navigation bar.</p>
        )}
      </div>
      
      <div className="bloc">Blog 1
        <p>xxxxxxxx</p>
        <p>(Click to view more)</p>
      </div>
      <div className="bloc">Blog 2
      <p>xxxxxxxx</p>
      <p>(Click to view more)</p>
      </div>
      <div className="bloc"><a>Blog 3</a>
      <p>xxxxxxxx</p>
      <p>(Click to view more)</p>
      </div>
      <div className="bloc">Blog 4
      <p>xxxxxxxx</p>
      <p>(Click to view more)</p>
      </div>
    </div>
  );
}

export default Results;
