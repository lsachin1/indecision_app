import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

test('should setup remove expense action object', ()=>{
 	const action = removeExpense("1234");
 	expect(action).toEqual({
 		type: 'REMOVE_EXPENSE',
 		id: '1234'
 	})
})

test('should setup edit expense action object', () => {
	const action = editExpense("1234", {notes: 'test'});
	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: '1234',
		updates: {
			notes: 'test'
		}
	});
})

test('should add expense to database and store', (done) => {

	const store = createMockStore({});

	const expenseData = {
		description: 'Mouse',
		amount: 3000,
		note: 'This one is better',
		createdAt: 1000
	}

	store.dispatch(startAddExpense(expenseData)).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: 'ADD_EXPENSE',
			expense: {
				id: expect.any(String),
				...expenseData
			}
		})

		database.ref(`expenses/${actions[0].expense.id}`).once('value').then((snapshot) => {
			expect(snapshot.val()).toEqual(expenseData);
			done();
		})
	});
})

test('should add default expense to database and store ', () => {
	const store = createMockStore({});

	const expenseDefault = {
		description: '',
		amount: 0,
		note: '',
		createdAt: 0
	}

	store.dispatch(startAddExpense(expenseDefault)).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: 'ADD_EXPENSE',
			expense: {
				id: expect.any(String),
				...expenseDefault
			}
		})

		database.ref(`expenses/${actions[0].expense.id}`).once('value').then((snapshot) => {
			expect(snapshot.val()).toEqual(expenseDefault);
			done();
		})
	});
})
/*test('should setup add expense action object with default values', ()=>{
	const obj = {
		description:'',
		note:'',
		amount:0,
		createdAt:0
	};

	const action = addExpense(obj);

	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense:{
			id: expect.any(String),
			...obj
		}

	});
})*/

test('should setup add expense action objecy with values', () =>{
	const obj = {
		id: 2,
		description: 'test',
		note: 'test',
		amount:235600,
		createdAt:0
	};

	const action = addExpense(obj);

	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: obj
	})
})