import './homepage.css'
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import api from '../Api/api_potencia_placa'

export function HomePage() {

	const [value, onChange] = useState(new Date());
	let dia, mês;
	if (parseInt(value.getDate()) > 0 && parseInt(value.getDate()) < 10) {
		dia = '0' + value.getDate()

	} else {

		dia = value.getDate();
	} if (parseInt(value.getMonth()) > 0 && parseInt(value.getMonth()) < 10) {
		mês = '0' + value.getMonth()
	}
	let data = dia + '/' + '05' + '/' + value.getFullYear();
	console.log(data)

	
	axios.post("http://localhost:3305/data", { Data_calendario: data })
		.then().catch(erro => console.log(erro))

	const [potencia_placa = 0, setPotencia_placa] = useState()
	api
		.get("/potencia_placa")
		.then((response) => setPotencia_placa(response.data))
		.catch((err) => {
			console.error("ops! ocorreu um erro" + err);
		});

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
							<li>Média de potência:{potencia_placa}</li>
						</ul>
					</div>
				</section>

				<Calendar id='calend' onChange={onChange} value={value} />

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


		</div>
	);


}

export default HomePage;