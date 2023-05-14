import './homepage.css'
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import api from '../Api/api_potencia_placa'
import api1 from '../Api/api_potencia_tensao'

export function HomePage() {
	console.log('run')
	const [value, onChange] = useState(new Date());
	let dia, mês;
	if (parseInt(value.getDate()) > 0 && parseInt(value.getDate()) < 10) {
		dia = '0' + value.getDate()

	} else {

		dia = value.getDate();
	} if (parseInt(value.getMonth()) > 0 && parseInt(value.getMonth()) < 10) {
		let aux
		aux = parseInt(value.getMonth()) + 1
		mês = '0' + aux
	} else {
		let aux
		aux = parseInt(value.getMonth()) + 1
		mês = aux
	}
	let data = dia + '/' + mês + '/' + value.getFullYear();
	console.log(data)


	axios.post("http://localhost:3305/data", { Data_calendario: data })
		.then().catch(erro => console.log(erro))

	const [potencia_placa, setPotencia_placa] = useState()
	const [potencia_turbina, setPotencia_turbina] = useState()

	api.get("/")
		.then((response) => setPotencia_placa(response.data))
		.catch((err) => {
			console.error("ops! ocorreu um erro" + err);
		});

	/*api1.get("/")
		.then((response) => setPotencia_turbina(response.data))
		.catch((err) => {
			console.error("ops! ocorreu um erro" + err);
		});*/

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
							<li>Média de Tensão</li>
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
							<li>Média de potência:{potencia_turbina}</li>
						</ul>
					</div>
				</section>
			</main>


		</div>
	);


}

export default HomePage;