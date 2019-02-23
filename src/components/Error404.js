import React from 'react';

import { CSSTransition } from 'react-transition-group';

import './fade-center.css';
import './error404.css';

const Error404 = props => {
	
	return (
		<div
			className="h-100 p-4 d-flex flex-column justify-content-center align-items-center error404"
			style={{background: `url(${require('../assets/images/bg.jpg')})`,
				backgroundSize: 'cover',
				backgroundPosition: 'bottom right'}}
		>
			<CSSTransition
				in={!props.loading}
				timeout={800}
				classNames='fade-center'
				appear
				mountOnEnter
				unmountOnExit
			>
				<div className="alert alert-danger mt-4" role="alert">
					<h2 className="text-center">Error, ciudad no encontrada</h2>
				</div>
			</CSSTransition>
		</div>
	);
}
 
export default Error404;