
import { useEffect, useState } from 'react';
import api from '../Api/api'
import ApexChart from 'react-apexcharts';

export default function Chart() {

    const [irr,setIrr] = useState()  
    useEffect(() => {
      api
        .get("/")
        .then((response) => setIrr(response.data))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    }, []);


const options = {
  xaxis: {
    categories: ["06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"],
    title: {
      text: "Horas de exposição do projeto",
      style: {
        fontSize: '14px',
        fontWeight: 'bold',
        fontFamily: undefined,
        color: '#263238'
      }
    },

  },
  yaxis: [{
    title: {
      text: "Irradiação Solar  Wh/m2",
      style: {
        fontSize: '14px',
        fontWeight: 'bold',
        fontFamily: undefined,
        color: '#263238'
      }
    }
  }]

}

const series = [{
  name: 'Irradiação Solar  Wh/m2',
  //data: data_irr
  data:irr
  //data: [0, 510, 520, 500, 535.8, 560.10, 520, 530, 498, 525, 500, 470, 550, 535, 0]
  
}]



return (
  <ApexChart
    options={options}
    series={series}
    type='line'
    width={640}
    height={350}
  />

)

  }
