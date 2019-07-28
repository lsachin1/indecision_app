import React from 'react';

export const Option = (props) => {
	return (
				<div>
					<li>{props.optionValue} &nbsp; <button onClick={() => { props.removeItem(props.optionValue) }}>Remove</button></li>
				</div>
			);
}