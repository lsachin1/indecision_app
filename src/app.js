import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import AppRouter from './router/AppRouter';
import expenseStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setFitersText } from './actions/filters';
import { getVisibleExpenses } from './selectors/expenses';
import { Provider } from 'react-redux';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase'
import './styles/styles.scss';

const appRoot = document.getElementById('app');

const store  = expenseStore();

/*const expenseOne = store.dispatch(addExpense(
	{
		description: 'Water bill',
		amount: '4500',
		createdAt: 0
	}
))

const expenseTwo = store.dispatch(addExpense(
	{
		description: 'Gas bill',
		amount: '0',
		createdAt: 1000
	}
))

const expenseThree = store.dispatch(addExpense(
	{
		description: 'Rent',
		amount: '109500',
		createdAt: 0
	}
))*/


/*store.dispatch(
	setFitersText(
		{
			text: 'water'
		}
	)
)*/

/*setTimeout(()=>{
	store.dispatch(
		setFitersText(
			{
				text: ''
			}
		)
	)
}, 3000)*/

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
)

ReactDOM.render(jsx, appRoot);

