import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from "react-router-dom";
import Funda from '../pages/Funda';
import Footer from '../components/Footer';


export default function menu() {
  return (
    <div>
      <Navbar />
      <div className="row">
        <div className="column">
          <div className="card">
            <h2>Fundamentel Analysis</h2>
            <br></br>
            <p>Fundamental Analysis (FA) is a holistic</p>
            <Link to="/funda">learn here</Link>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <h2>Technical Analysis</h2>
            <br></br>

            <p>Technical analysis is a tool, or</p>

            <Link to="/tech">learn here</Link>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <h2>The Support and Resistance</h2>
            
            <p>In a downtrend, prices fall </p>
            <Link to="/sr">learn here</Link>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <h2>candlestick Patterns</h2>
            <br></br>
            <p>kshfkjlsdhfklhsklhfkljshfkljshffhsdjfhkshf</p>
            <Link to="/cn">learn here</Link>
          </div>
        </div>
        <br></br>
        <div className="column">
          <div className="card">
            <h2>Risk Management</h2>
            <br></br>
            <p>kshfkjlsdhfklhsklhfkljshfkljshffhsdjfhkshf</p>
            <Link to="/risk">learn here</Link>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <h2>Intraday Trading</h2>
            <br></br>
            <p>kshfkjlsdhfklhsklhfkljshfkljshffhsdjfhkshf</p>
            <Link to="/intrad">learn here</Link>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <h2>Trading Rules</h2>
            <br></br>
            <p>kshfkjlsdhfklhsklhfkljshfkljshffhsdjfhkshf</p>
            <Link to="/tradinrules">learn here</Link>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <h2>Mindset</h2>
            <br></br>
            <p>kshfkjlsdhfklhsklhfkljshfkljshffhsdjfhkshf</p>
            <Link to="/mind">learn here</Link>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <h2>long term investment</h2>
            <br></br>
            <p>kshfkjlsdhfklhsklhfkljshfkljshffhsdjfhkshf</p>
            <Link to="/long">learn here</Link>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <h2>Short term investment</h2>
            <br></br>
            <p>kshfkjlsdhfklhsklhfkljshfkljshffhsdjfhkshf</p>
            <Link to="/short">learn here</Link>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <h2>Mid term investment</h2>
            <br></br>
            <p>kshfkjlsdhfklhsklhfkljshfkljshffhsdjfhkshf</p>
            <Link to="/mid">learn here</Link>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <h2>Cuorses</h2>
            <br></br>
            <p>Comming soon</p>
            <Link to="#">learn here</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
