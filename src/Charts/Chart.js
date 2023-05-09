<<<<<<< HEAD

import ApexChart from 'react-apexcharts';

export default function Chart() {
=======
import axios from 'axios';
import ApexChart from 'react-apexcharts';

export default function Chart() {
  let data_irr

  /*axios.get("localhost:3305")
  .then((response) => {
   data_irr= (response.data);


  }).catch(function (error) {
    // handle error
    console.log(error);
  });
  console.log(data_irr[0])*/
>>>>>>> 78bc7c0b9f8d73747be4ddbdd7f438d32140a05f

  const options = {
    xaxis: {
      categories: ["06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00"],
      title: {
        text: "Horas de exposição do projeto",
        style: {
          fontSize:  '14px',
          fontWeight:  'bold',
          fontFamily:  undefined,
          color:  '#263238'
        }
      },
      
    },
    yaxis: [{
        title: {
          text : "Irradiação Solar  Wh/m2",
          style: {
            fontSize:  '14px',
            fontWeight:  'bold',
            fontFamily:  undefined,
            color:  '#263238'
          }
        }
      }]
   
  }

  const series = [{
    name: 'Irradiação Solar  Wh/m2',
<<<<<<< HEAD
=======
    //data: data_irr
>>>>>>> 78bc7c0b9f8d73747be4ddbdd7f438d32140a05f
    data: [0,510,520,500,535.8,560.10,520,530,498,525,500,470,550,535,0]
  }]
  



  return(
    <ApexChart
      options = {options}
      series = {series}
      type = 'line'
      width={640}
      height = {350}
    />

  )

}