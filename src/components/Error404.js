import React from 'react';

const Error404 = props => {
	let error;
	if (props.error === 404) {
		return (
			<div className="h-100 d-flex flex-column justify-content-center align-items-center">
				<img src='img/404.png' alt="error 404" style={{height: 100}}/>
				<div className="alert alert-danger mt-4" role="alert">
					<h2 className="text-center">Error, city not found</h2>
				</div>
			</div>
		)
	} else if (props.error === 'error') {
		return (
			<div className="h-100 d-flex flex-column justify-content-center align-items-center">
				<img src="img/error.png" alt="error" style={{height: 200}}/>
			</div>
		)
	}
	return (
		<div className="error-404">
			{ error }
		</div>
	);
}
 
export default Error404;