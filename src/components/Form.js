import React from 'react';

const Form = props => {
	const location = React.createRef();

	const sendLocation = event => {
		event.preventDefault();
		props.getLocation(location.current.value);
		location.current.value = '';
	}
	return (
			<form onSubmit={sendLocation} className="col-12 col-md-8 py-3 p-md-0 my-auto">
				<div className="m-0 form-group d-flex justify-content-center row">
					<div className="input-group col-8">
						<div className="input-group-prepend">
							<div className="input-group-text">AR</div>
						</div>
						<input ref={location} type="text" className="form-control" placeholder="City from AR..."/>
					</div>
					<button type="submit" className="form-control btn btn-primary col-4">Search</button>
				</div>
			</form>
	);
}

export default Form;