
import React from 'react';
import Accordion from './Accordion';


import './App.css';


const items = [
  {
    title: 'Accordion Item 1',
    content: 'Content for item 1',
  },
  {
    title: 'Accordion Item 2',
    content: 'Content for item 2',
  },
  {
    title: 'Accordion Item 3',
    content: 'Content for item 3',
  },
];

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign:"center", marginTop:"10px"}}>My Accordion</h1>
      <Accordion items={items} />

    </div>
  );
}

export default App;
