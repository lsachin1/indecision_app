import React from 'react';
import { Option } from './Option';

export const Options = (props) => {
	return (
			<div>
				
				<ul>
					{
						props.options.map
						(
							(op) => <Option key={op} optionValue={op} removeItem={props.removeItem}/>
						)
					}
				</ul>
				<button onClick={props.removeAll}>
					Remove All
				</button>
			</div>
		);
}
