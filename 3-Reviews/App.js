import React from 'react'
import data from './components/data';
import Review from './components/Review';

function App() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="title">
            <h2>Our reviews</h2>
            <div className='underline'></div>
          </div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
