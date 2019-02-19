import React from 'react';

const Error404 = props => {
	
	return (
		<div className="h-100 d-flex flex-column justify-content-center align-items-center">
			<div className="alert alert-danger mt-4" role="alert">
				<h2 className="text-center">Error, ciudad no encontrada</h2>
			</div>
		</div>
	);
}
 
export default Error404;