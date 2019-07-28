import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

export const AddExpensePage = (props) => {
	return (
		<div>
			<ExpenseForm onSubmit={(expense)=>{
				props.onSubmit(expense);
				props.history.push("/");
			}}/>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: (expense) =>  dispatch(startAddExpense(expense))
	}
}

export default connect(null, mapDispatchToProps)(AddExpensePage);




