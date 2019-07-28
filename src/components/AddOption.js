import React from 'react';

export const AddOption = (props) => {
	return (
			<div>
				{props.error && <p>{props.error}</p>}
				<form onSubmit={props.formSubmit}>
					<input type="text" name="option" />
					<button>Add Option</button>
				</form>		
			</div>
		);
}