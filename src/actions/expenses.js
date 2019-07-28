// Actions
import uuid from 'uuid';
import database from '../firebase/firebase';

//normal
// 1. component call action generator
// 2. action generator returns an object
// 3. component dispatch object
// 4. redux store changes

// with firebase (database)
// 1. component call action generator
// 2. action generator returns an function
// 3. component dispatch function {?} , generally redux does not allow to dispatches function rather allows object. we need thrid party tool to do that i.e redux-thunk
// 4. function runs ( when we do dispatch function, redux internally exceutes the function where we put our firebase code, then we call our normal dispatch which dispatches an object which will change the redux store)

// ADD EXPENSE
export const addExpense = (expense) => {
	console.log("in add expense");
	return {
		type: 'ADD_EXPENSE',
		expense
	}
}

export const startAddExpense = (expenseData = {}) => {
	console.log("--expenseData--->", expenseData);
	return (dispatch) => {

		const {
			description = '',
			note = '',
			amount = 0,
			createdAt = 0
		} = expenseData;

		const expense = {
			description,
			note,
			amount,
			createdAt
		}
		console.log("xxxxx");
        console.log(expense);
		return database.ref('expenses').push(expense).then((ref) => {
			dispatch(addExpense({
				id: ref.key,
				...expense
			}))
		}).catch((e) => {
			cosnole.log('Error', e);
		});
	};
};

// REMOVE_EXPENSE
export const removeExpense = (id) => {
	return {
		type: 'REMOVE_EXPENSE',
		id
	}
}
// EDIT_EXPENSE
export const editExpense = (id, updates) => {
	console.log(updates);
	return {
		type: 'EDIT_EXPENSE',
		id,
		updates
	}
}