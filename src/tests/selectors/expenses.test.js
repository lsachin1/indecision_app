import { getVisibleExpenses } from '../../selectors/expenses';

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

test('should filter by text value', () => {
	const filters = {
		text: 'e',
		sortBy: 'date',
		startdate: undefined,
		endDate: undefined
	}

	const results = getVisibleExpenses(expense, filters);
	expect(results).toEqual([expense[2], expense[1]])
});

test('should filter by start date && end date', () => {
	const filters = {
		text: '',
		sortBy: 'date',
		startDate: 600,
		endDate: 1000
	}

	const results = getVisibleExpenses(expense, filters);
	expect(results).toEqual([expense[2]])
})

test('should filter by start date', () => {
	const filters = {
		text: '',
		sortBy: 'date',
		startDate: -1000,
		endDate: undefined
	}

	const results = getVisibleExpenses(expense, filters);
	expect(results).toEqual([expense[2], expense[0], expense[1]])
})

test('should filter by end date', () => {
	const filters = {
		text: '',
		sortBy: 'date',
		startDate: undefined,
		endDate: 900
	}

	const results = getVisibleExpenses(expense, filters);
	expect(results).toEqual([expense[0], expense[1]]);

})

test('should sort by date', () => {
	const filters = {
		text: '',
		sortBy: 'date',
		startDate: undefined,
		endDate: undefined
	}

	const results = getVisibleExpenses(expense, filters);
	expect(results).toEqual([expense[2], expense[0], expense[1]]);

})

test('should sort by amount', () => {
	const filters = {
		text: '',
		sortBy: 'amount',
		startDate: undefined,
		endDate: undefined
	}

	const results = getVisibleExpenses(expense, filters);
	expect(results).toEqual([expense[1], expense[2], expense[0]]);
})