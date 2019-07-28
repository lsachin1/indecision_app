import { expensesReducer } from '../../reducers/expenses';

const expense = [
	{
		id: 1,
		description: 'Gum',
		notes: '',
		amount: 195,
		createdAt: 0
	},{
		id: 2,
		description: 'Rent',
		notes: '',
		amount: 109500,
		createdAt: -1000
	},{
		id: 3,
		description: 'credit card',
		notes: '',
		amount: 4500,
		createdAt: 1000
	}
];

test('should setup a default value', () => {
	const state = expensesReducer(undefined, { type: '@@INIT'});
	expect(state).toEqual([]);
})

test('should setup a new expense', () => {
	const exp = {
		id: 4,
		description: 'master card',
		notes: '',
		amount: 5500,
		createdAt: 2000
	}
	const state = expensesReducer(expense, {type: 'ADD_EXPENSE', expense: exp});
	expect(state).toEqual([
		...expense,
		exp
	])
});

test('should remove expense by it\'s id', () => {
	const state = expensesReducer(expense, {type: 'REMOVE_EXPENSE', id: expense[0].id});
	expect(state).toEqual([expense[1], expense[2]])
})

test('should not remove an expense if id is not there', ()=>{
	const state =  expensesReducer(expense, {type: 'REMOVE_EXPENSE', id: -1});
	expect(state).toEqual(expense)
})

test('should edit the expense for given id', () => {
	const description = 'Rent new update';
	const action = {
		type: 'EDIT_EXPENSE',
		updates: {
			description
		},
		id: expense[0].id
	}
	const state = expensesReducer(expense, action);
	expect(state[0].description).toBe(description)
})

test('should not edit the expense for non existing id', () => {
	const description = 'Rent new update';
	const action = {
		type: 'EDIT_EXPENSE',
		updates: {
			description
		},
		id: -1
	}
	const state = expensesReducer(expense, action);
	expect(state).toEqual(expense)
})