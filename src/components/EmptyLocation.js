import React from 'react';

const EmptyLocation = props => {
	return (
		<div className="h-100 w-100 d-flex flex-column justify-content-center align-items-center">
			<div class="alert alert-success" role="alert">
				<h4 class="alert-heading">¡Bienvenido!</h4>
				<p>Ingresa tu ubicacion en el formulario de arriba, solo estan disponibles las localidades de Argentina</p>
				<hr/>
				<p class="mb-0">Gracias por probar mi aplicacion del clima</p>
			</div>
		</div>
	);
}
 
export default EmptyLocation;