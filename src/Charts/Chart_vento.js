import api from '../Api/api_vento'
import { useEffect, useState } from 'react';
import ApexChart from 'react-apexcharts';
import HomePage from '../homepage/homepage';

export default function Chart() {

  
  const [vento,setVento] = useState()  
  useEffect(() => {
    console.log('testes')
    api
      .get("/")
      .then((response) => setVento(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

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
          text : "Velocidade do vento",
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
    name: 'Velocidade do vento - Km/h',
    data: vento
    //data: [0,9.98,0,6.65,16.63, 6.65,0,0,24.47,40,0,0,3.25,0,0]
  }]
  


  return(
    <ApexChart
      class = 'Chart_vento'
      options = {options}
      series = {series}
      type = 'line'
      width={640}
      height = {350}
    />

  )

}
