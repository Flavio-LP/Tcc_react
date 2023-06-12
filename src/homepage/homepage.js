import './homepage.css'
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import api from '../Api/api_potencia_placa'
import api_pt from '../Api/api_potencia_turbina'
import api_tp from '../Api/api_tensao_placa'
import api_cp from '../Api/api_corrente_placa'
import api_ct from '../Api/api_corrente_turbina'
import api_tt from '../Api/api_tensao_turbina'

export function HomePage() {
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


	

	const [potencia_placa, setPotencia_placa] = useState()
	const [potencia_turbina, setPotencia_turbina] = useState()
	const [tensao_placa, setTensao_placa] = useState()
	const [corrente_placa, setCorrente_placa] = useState()
	const [tensao_turbina, setTensao_turbina] = useState()
	const [corrente_turbina, setCorrente_turbina] = useState()


	useEffect(()=>{

		axios.post("https://tccbackend-production.up.railway.app/data", { Data_calendario: data })
		.then().catch(erro => console.log(erro))

		api.get("/")
		.then((response) => setPotencia_placa(response.data))
		.catch((err) => {
			console.error("ops! ocorreu um erro" + err);
		});

		api_pt.get("/")
		.then((response) => setPotencia_turbina(response.data))
		.catch((err) => {
			console.error("ops! ocorreu um erro" + err);
		});

		api_tp.get("/")
		.then((response) => setTensao_placa(response.data))
		.catch((err) => {
			console.error("ops! ocorreu um erro" + err);
		});

		api_cp.get("/")
		.then((response) => setCorrente_placa(response.data))
		.catch((err) => {
			console.error("ops! ocorreu um erro" + err);
		});

		api_tt.get("/")
		.then((response) => setTensao_turbina(response.data))
		.catch((err) => {
			console.error("ops! ocorreu um erro" + err);
		});

		api_ct.get("/")
		.then((response) => setCorrente_turbina(response.data))
		.catch((err) => {
			console.error("ops! ocorreu um erro" + err);
		});
})
	
	/*api1.get("/")
		.then((response) => setPotencia_turbina(response.data))
		.catch((err) => {
			console.error("ops! ocorreu um erro" + err);
		});*/

	return (
		<div id='page'>
			<head>
			<title>Dashboard TCC</title>
			</head>
			<header>
				<h1>MONITORAMENTO DA GERAÇÃO DE ENERGIA ELÉTRICA NO MODELO HÍBRIDO, SOLAR E EÓLICO</h1>
			</header>

			<main>
				<section class="Painel_solar">
					<div class="titulo">
						<h2>Placa Solar</h2>
					</div>
					<div class="subtitulos">
						<ul>
							<li>Média de Tensão: {tensao_placa} V</li>
							<li>Média de Corrente: {corrente_placa} mA</li>
							<li>Média de Potência:{potencia_placa} mW</li>
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
							<li>Média de Tensão: {tensao_turbina} V</li>
							<li>Média de Corrente: {corrente_turbina} mA</li>
							<li>Média de Potência: {potencia_turbina} mW</li>
						</ul>
					</div>
				</section>
			</main>


		</div>
	);


}

export default HomePage;
