import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
import './styles/styles.scss';

// Actions
// ADD EXPENSE
const addExpense = (
	{
		description = '',
		note = '',
		amount = 0,
		createdAt = 0
	} = {}
) => {
	return {
		type: 'ADD_EXPENSE',
		expense: {
			id: uuid(),
			description,
			note,
			amount,
			createdAt
		}
	}
}
// REMOVE_EXPENSE
const removeExpense = (id) => {
	return {
		type: 'REMOVE_EXPENSE',
		id
	}
}
// EDIT_EXPENSE
const editExpense = (id, updates) => {
	return {
		type: 'EDIT_EXPENSE',
		id,
		updates
	}
}
// SET_TEXT_FILTERS
const setFitersText = (
	{
		text = ''
	} = {}
) => {
	return {
		type: 'SET_TEXT_FILTERS',
		text
	}
}
// SORT_BY_DATE
const setSortByDate = (sortBy) => {
	return {
		type: 'SORT_BY_DATE',
		sortBy
	}
}
// SORT_BY_AMOUNT
const setSortByAmount = (sortBy) => {
	return {
		type: 'SORT_BY_AMOUNT',
		sortBy
	}
}
// SET_START_DATE
const setStartDate = (startDate) => {
	return {
		type: 'SET_START_DATE',
		startDate
	}
}
// SET_END_DATE
const setEndDate = (endDate) => {
	return {
		type: 'SET_END_DATE',
		endDate
	}
}
// Expenses Reducers

const expensesReducersDefaultsState = [];

const expensesReducer = (state = expensesReducersDefaultsState, action) => {

	switch(action.type){
		case 'ADD_EXPENSE':
			return [
				...state,
				action.expense
			]
		case 'REMOVE_EXPENSE':
			return state.filter(
				({id}) => {
					 return id != action.id
				}
			);
		case 'EDIT_EXPENSE':
			return state.map(
				(expense) => {
					if(expense.id === action.id){
						return {
							...expense,
							...action.updates
						};
					} else {
						return expense;
					}
				}
			)
		default :
		return state;
	}
};

const filtersReducersDefaultState = {
	text: '',
	sortBy: 'amount',
	startDate: undefined,
	endDate: undefined
}

const filtersReducer = (state = filtersReducersDefaultState, action) => {
	switch(action.type){
		case 'SET_TEXT_FILTERS':
			return {
				...state,
				text: action.text
			}
		case 'SORT_BY_DATE':
			return {
				...state,
				sortBy: action.sortBy
			}
			case 'SORT_BY_AMOUNT':
				return {
					...state,
					sortBy: action.sortBy
				}
			case 'SET_START_DATE':
				return {
					...state,
					startDate: action.startDate
				}
			case 'SET_END_DATE':
				return {
					...state,
					endDate: action.endDate
				}
		default:
			return state;
	}
}

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) => {
	
	return expenses.filter(
		(expense) => {
			const startDateMatch = typeof startDate !== "number" || startDate <= expense.createdAt;
			const endDateMatch = typeof endDate !== "number" || endDate >= expense.createdAt;
			const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
			return startDateMatch && endDateMatch && textMatch
		}
	).sort(( a, b) => {
		console.log(a);
		console.log(b);

		if(sortBy === 'date'){
			return a.createdAt <= b.createdAt ? 1 : -1
		}
		
		if(sortBy === 'amount'){
			return a.amount < b.amount ? 1: -1;
		}
		console.log('xxx');
	})
	


}
const expenseStore = createStore(
	combineReducers(
		{
			expenses: expensesReducer,
			filters: filtersReducer
		}
	)
);

expenseStore.subscribe(
	() => {
		const state = expenseStore.getState();
		
		//console.log(expenseStore.getState());

		
		//console.log("xxxx");
	}
)

const expenseOne = expenseStore.dispatch(addExpense(
	{
		description: 'Rent',
		amount: '1000',
		createdAt: -21000
	}
))

const expenseTwo = expenseStore.dispatch(addExpense(
	{
		description: 'Coffee',
		amount: '2750',
		createdAt: -1000
	}
))
/*const expenseThree = expenseStore.dispatch(addExpense(
	{
		description: 'Cacke Shop',
		amount: '8000'
	}
))*/

//console.log(expenseOne);
//console.log(expenseTwo);
//console.log(expenseThree);

/*const removeExpenseOne = expenseStore.dispatch(
	removeExpense(expenseOne.expense.id)
)*/

/*const editExpenseOne = expenseStore.dispatch(
	editExpense(
		expenseOne.expense.id,
		{  
			description: 'Rent', 
			amount: 5000, 
			note: 'updated texts'
		}
	)
)*/

/*expenseStore.dispatch(
	setFitersText(
		{
			text: 'cof'
		}
	)
)*/

/*expenseStore.dispatch(
	setSortByDate('date')
)*/

/*expenseStore.dispatch(
	setSortByAmount('amount')
)*/

/*expenseStore.dispatch(
	setStartDate()
)*/

/*expenseStore.dispatch(
	setEndDate('03-10-2019')
)*/



//console.log(expenseStore.getState());


const visibleExpense = getVisibleExpenses(expenseStore.getState().expenses, expenseStore.getState().filters);
console.log(visibleExpense);

const demoState = {
	expenses:[
		{
			id: 'sdsdsdsd',
			description: 'This is rent for Jan',
			note:'This is final payment for month of Jan',
			amount: 54500,
			createdAt: 0
		}
	],
	filters: {
		text: 'rent',
		sortBy: 'amount', // either date or amount
		startDate: undefined,
		endDate: undefined
	}
}

const dividedBy = ( {dividedBy = 1} = {} ) => {
	return {
		type: 'DIVIDE',
		dividedBy
	}
}

const setCount = ({count = 0} = {} ) => {
	return {
		type: 'SET',
		count
	}
}

const reducers = (state = {count: 0}, action) => {
		switch(action.type){
			case 'INCREMENT':
				return {
					count: state.count + 4
				}
			case 'DECREMENT':
				return {
					count: state.count - 1
				}
			case 'MULTIPLY':
				return {
					count: state.count * action.multiplyBy
				}
			case 'DIVIDE':
				return {
					count : state.count / action.dividedBy
				}
			case 'SET':
				return {
					count: action.count
				}
			default:
				return state;
		}
}

const store = createStore(reducers);

store.subscribe(
	() => {
		console.log(store.getState());
	}
)

store.dispatch(
	{
		type: 'INCREMENT'
	}
);


store.dispatch(
	{
		type: 'DECREMENT'
	}
);



store.dispatch(
	{
		type: 'MULTIPLY',
		'multiplyBy': 4
	}
);

store.dispatch(dividedBy({'dividedBy': 2}));
store.dispatch(setCount({'count' : 64}));

const item = ['Coffee (hot)', '$2.00', '$2.50','$2.75'];
const [itemName,,Price] = item;
console.log(`A medium ${itemName} costs ${Price}`);