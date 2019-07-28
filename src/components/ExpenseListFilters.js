import React from 'react';
import { connect } from 'react-redux';
import { setFitersText, setSortByDate, setSortByAmount } from '../actions/filters';


const ExpenseListFilters = (props) => {
	return (
		<div>
			Filter By: <input type="text" value={props.filters.text} onChange={
				(e) => {
					props.dispatch(
						setFitersText(
							{text: e.target.value}
						)
					);
					console.log(e.target.value);
				}
			}/>
			<select value={props.filters.sortBy} onChange={
				(e) => {
					if(e.target.value === 'date'){
						props.dispatch(setSortByDate('date'));
					}else if(e.target.value === 'amount'){
						props.dispatch(setSortByAmount('amount'));
					}
				}
			}>
				<option value="date">Date</option>
				<option value="amount">Amount</option>
			</select>
		</div>
	)
}

const mappedPropsToState = (state) => {
	return {
		filters: state.filters
	}
}
export default connect(mappedPropsToState)(ExpenseListFilters);