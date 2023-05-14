/* eslint-disable react/jsx-pascal-case */

import './App.css';
import HomePage from './homepage/homepage';
import Footer from './homepage/Footer'
import Chart from './Charts/Chart'
import Chart_vento from './Charts/Chart_vento'


function App() {

  return (
    <>
      <HomePage />
      <div class='Chart'>
        <Chart />
        <Chart_vento class='Chart_vento' />
      </div>

      <Footer />
    </>
  );
}

export default App;
