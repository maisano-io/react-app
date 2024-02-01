import React from 'react';
import './style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="navbar">
          <div className="brand">Protectiv.</div>
          <nav>
            <a href="#home" className="nav-link">Home</a>
            <a href="#contact" className="nav-link contact">Contact</a>
          </nav>
        </div>
        <main className="main-content">
          <h1>Free Security Audit: Secure Your Business Today</h1>
          <p>
            Discover vulnerabilities before they become threats with our comprehensive, no-cost cybersecurity audit.
            Our open-source tools and expert analysis offer insights to fortify your business.
          </p>
          <button className="cta-button">Book A Call</button>
        </main>
      </header>
    </div>
  );
}

export default App;
