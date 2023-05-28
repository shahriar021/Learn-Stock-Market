import React from 'react';
import Navbar from '../components/Navbar';

export default function Funda() {
  return (
    <div>
      <Navbar />
      <h1>Fundamental Analysis</h1>
      <div className="row">
        <div className="col-4">
          <div
            id="simple-list-example"
            className="d-flex flex-column gap-2 simple-list-example-scrollspy text-center"
          >
            <a className="p-1 rounded" href="#simple-list-item-1">
              Item 1
            </a>
            <a className="p-1 rounded" href="#simple-list-item-2">
              Item 2
            </a>
            <a className="p-1 rounded" href="#simple-list-item-3">
              Item 3
            </a>
            <a className="p-1 rounded" href="#simple-list-item-4">
              Item 4
            </a>
            <a className="p-1 rounded" href="#simple-list-item-5">
              Item 5
            </a>
          </div>
        </div>
        <div className="col-8">
          <div
            data-bs-spy="scroll"
            data-bs-target="#simple-list-example"
            data-bs-offset="0"
            data-bs-smooth-scroll="true"
            className="scrollspy-example"
            tabindex="0"
          >
            <h4 id="simple-list-item-1">Item 1</h4>
            <p>...</p>
            <h4 id="simple-list-item-2">Item 2</h4>
            <p>...</p>
            <h4 id="simple-list-item-3">Item 3</h4>
            <p>...</p>
            <h4 id="simple-list-item-4">Item 4</h4>
            <p>...</p>
            <h4 id="simple-list-item-5">Item 5</h4>
            <p>...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
