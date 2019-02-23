import React from 'react';

import { CSSTransition } from 'react-transition-group';

import './fade-center.css';
import './emptyLocation.css';

const EmptyLocation = props => {
	return (
		<div
			className="h-100 w-100 p-4 d-flex flex-column justify-content-center align-items-center empty-location"
			style={
				{
					background: `url(${require('../assets/images/bg.jpg')})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center'
				}
			}
		>
			<CSSTransition
				in={!props.loading}
				timeout={800}
				classNames='fade-center'
				appear
				mountOnEnter
				unmountOnExit
			>
				<div className="alert alert-success" role="alert">
					<h4 className="alert-heading">¡Bienvenido!</h4>
					<p>Ingresa tu ubicacion en el formulario de arriba, solo estan disponibles las localidades de Argentina</p>
					<hr/>
					<p className="mb-0">Gracias por probar mi aplicacion del clima</p>
				</div>
			</CSSTransition>
		</div>
	);
}
 
export default EmptyLocation;