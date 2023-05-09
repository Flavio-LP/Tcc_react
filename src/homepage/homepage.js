import React from 'react';
import './homepage.css'

function HomePage() {
  return (
    <div id='page'>
    	<header>
		<h1>Título da Página</h1>
	</header>

	<main>
		<section class = "Painel_solar">
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

		<section class = "Turbina_eolica">
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