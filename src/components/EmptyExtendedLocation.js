import React from 'react';

const EmptyExtendedLocation = () => {
	return (
		<div className="h-100 w-100 d-flex justify-content-center align-items-center">
			<img
				src={require('../assets/images/icons/world.png')}
				alt="world"
				style={{height:300}}
			/>
		</div>
	);
}
 
export default EmptyExtendedLocation;