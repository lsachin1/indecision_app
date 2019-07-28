import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense }  from '../actions/expenses';


export const EditExpensePage = (props) => {
	//console.log(props);
	return (
		<div>
			<ExpenseForm expense={props.expense} onSubmit={(expense)=>{
				console.log("updated", expense);
				props.onSubmit(props.expense.id, expense);
				props.history.push("/");
			}}/>
		</div>
	)
}

const mappedToState = (state, props) => {
	return {
		expense: state.expenses.find((expense)=>{
			return expense.id === props.match.params.id
		})
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: (id, expense) => dispatch(editExpense(id, expense))
	}
}
export default connect(mappedToState, mapDispatchToProps)(EditExpensePage);