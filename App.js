import React from 'react';
import './App.css';

function App() {
    return(
        <div className="bg-img">
        <div className="overlay"></div>
				<div className="home-wrapper">
					<div className="container">
						<div className="row">
							<div className="col-md-10 col-md-offset-1">
								<div className="home-content">
									<h1 className="white-text">Somos Dasaga</h1>
									<p className="white-text">Muebles & Accesorios S.A.S.</p>
									<a className="orange-btn" href="portafolio.pdf" target="_blank">Ir a Portafolio</a>
								</div>
							</div>
						</div>
					</div>
				</div>
            <div className="section-header" id="about">
                <h2 className="title">¿Qui&eacute;nes Somos?</h2>
            <p className="tex">DASAGA MUEBLES &amp; ACCESORIOS S.A.S., es una empresa de servicios y manufactura, expertos en fabricaci&oacute;n, comercializaci&oacute;n, distribuci&oacute;n, mantenimiento, asesor&iacute;a
                t&eacute;cnica, dise&ntilde;os especiales
                e instalaci&oacute;n de mobiliario &amp; accesorios en la l&iacute;nea de oficina, comercial, e
                institucional.
            </p>
            <div className="section-header">
                <h2 className="title">Misi&oacute;n</h2>
            </div>
            <p className="tex">
                Brindar un nivel profesional, &aacute;gil y eficiente a nuestros clientes,
                caracteriz&aacute;ndonos por un
                alto compromiso con la calidad, funcionalidad, ergonom&iacute;a y cumplimiento en nuestros
                productos,
                con materia prima seleccionada e insumos de primera clase.
                Ofrecer asesor&iacute;a permanente en la fabricaci&oacute;n de sus dise&ntilde;os, satisfacer
                plenamente las
                necesidades de todos nuestros clientes superando sus expectativas.
            </p>
            <div className="section-header">
                <h2 className="title">Visi&oacute;n</h2>
            </div>
            <p className="tex">
                Ser una firma consolidada y reconocida en el mercado, por ser una empresa que provee las mejores
                soluciones en la fabricaci&oacute;n de mobiliario, con los m&aacute;s finos acabados, bajo altos
                est&aacute;ndares de
                la industria, con un equipo humano, capacitado y comprometido de manera integral.
            </p>
        </div>
        <div id="service" className="sectionn">
					<div className="st">
						<div className="section-header text-center">
							<h2 className="title">Servicios</h2>
						</div>
					</div>
					<div className="s1">
						<div className="service">
							<h3 className="tit">Distribuci&oacute;n</h3>
							<p className="detail">Servicio de transporte y log&iacute;stica dentro y fuera de la ciudad.</p>
						</div>
						</div>
              			<div class="s2">
							<div class="service">
								<h3 class="tit">Manufactura</h3>
								<p class="detail">Fabricaci&oacute;n en madera, metal, vidrio, entre otros. Garantizando la calidad.</p>
							</div>
						</div>
						<div class="s3">
							<div class="service">
									<h3 class="tit">Planos</h3>
									<p class="detail">Visualice su proyecto mobiliario y la distribuci&oacute;n en ambientes 2D y
										3D.</p>
							</div>
						</div>
						<div class="s4">
							<div class="service">
								<h3 class="tit">Asesor&iacute;a</h3>
								<p class="detail">Asesor&iacute;a acorde a la exigencia de nuestros clientes.</p>
							</div>
						</div>
						<div class="s5">
							<div class="service">
								<h3 class="tit">Mantenimiento</h3>
								<p class="detail">Consultor&iacute;a de mantenimiento preventivo y correctivo.</p>
							</div>
						</div>
						<div class="s6">
							<div class="service">
								<h3 class="tit">Fabricaci&oacute;n</h3>
								<p class="detail">Dise&ntilde;o, fabricaci&oacute;n e instalaci&oacute;n de todo tipo de
										muebles.</p>
							</div>
						</div>
						</div>
        </div>
    )
}

export default App;