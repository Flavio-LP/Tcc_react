import './homepage.css'
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import Chart from '../Charts/Chart'
import Chart_vento from '../Charts/Chart_vento'

export function HomePage() {

	const [value, onChange] = useState(new Date());
	let dia,mês;
	if (parseInt(value.getDate()) > 0 && parseInt(value.getDate()) < 10) {
		dia = '0' + value.getDate()

	}else{

		dia = value.getDate();
	} if (parseInt(value.getMonth()) > 0 && parseInt(value.getMonth()) < 10) {
		mês = '0' + value.getMonth()
	}
	let data = dia + '/' + '05' + '/' + value.getFullYear();
	console.log(data)
	axios.post("http://localhost:3305/data", { Data_calendario: data })
		.then().catch(erro => console.log(erro))

	return (
		<div id='page'>
			<header>
				<h1>Título da Página</h1>
			</header>

			<main>
				<section class="Painel_solar">
					<div class="titulo">
						<h2>Placa Solar</h2>
					</div>
					<div class="subtitulos">
						<ul>
							<li>Média de Tensão:</li>
							<li>Média de Corrente:</li>
							<li>Média de potência:</li>
						</ul>
					</div>
				</section>

				<Calendar id= 'calend' onChange={onChange} value={value} />

				<section class="Turbina_eolica">
					<div class="titulo">
						<h2>Turbina Eólica</h2>
					</div>
					<div class="subtitulos">
						<ul>
							<li>Média de Tensão:</li>
							<li>Média de Corrente:</li>
							<li>Média de potência:</li>
						</ul>
					</div>
				</section>
			</main>
			

			<div class = 'Chart'>
        		<Chart/>
        		<Chart_vento  class= 'Chart_vento'/>
      		</div>

		</div>
	);


}

export default HomePage;