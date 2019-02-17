import React from 'react';

import './header.css';

const Header = props => {
	return (
		<header>
			<div className="container-fluid text-center d-flex align-items-center justify-content-center h-100 py-2">
				<div className="row h-100 w-100">
					<div className="col-12 col-md-4">
						<a href="/" className="home-link" style={{fontSize: 32}}>Weather App</a>
					</div>
					{props.children}
				</div>
			</div>
		</header>
	);
}
 
export default Header;