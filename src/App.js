import React from 'react';
import Latestposts from './latestposts';
import Card from './card';
import './App.css'


function App() {
  return (
    <div>
      <div className='header'>
        <div id="logo">
          <h1>EDYODA</h1>
          <p>Stories</p>
        </div>
        <p className='dropdown-text'>Explore Categories<span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNpiYGBguAPE/f///2fAh0FqgPguiBEDxC+BeDUQM2NRyAyVewlWCxW0B+L7QHwAiHmRFPNCxUBy9mAxJElVIL4MxBeBWB6KL0LFVOHq0KwXAuJDQHwPikFsIWQ1jFCFcMDIyMgGpFZAuRFA+V/I8gABBgD8EGd4shdx5wAAAABJRU5ErkJggg==" alt="" /></span></p>
        <p className='visibility-text'>EdYoda is a learning and knowledge
          sharing platform for techies

        </p>
        <button className="active btn link">Go To Main Website</button>


      </div>
      <Latestposts />
      <Card />
    </div>
  )
}

export default App
