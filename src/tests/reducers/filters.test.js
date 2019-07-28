import { filtersReducer } from '../../reducers/filters';

test('should setup a default filter values', () => {
	const state = filtersReducer(undefined, {type: '@@INIT'});
	expect(state).toEqual({
		text: '',
		sortBy: 'date',
		startDate: undefined,
		endDate: undefined
	})
})

test('should setup a text filter values', () => {
	const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTERS', text: 'rent'});
	expect(state).toEqual({
		text: 'rent',
		sortBy: 'date',
		startDate: undefined,
		endDate: undefined
	})
})

test('should setup a sortBy as date', () => {
	const state = filtersReducer(undefined, { type: 'SORT_BY_DATE', sortBy: 'date'});
	expect(state).toEqual({
		text: '',
		sortBy: 'date',
		startDate: undefined,
		endDate: undefined
	});
})

test('should setup a sortBy as amount', () => {
	const state = filtersReducer(undefined, { type: 'SORT_BY_DATE', sortBy: 'amount'});
	expect(state).toEqual({
		text: '',
		sortBy: 'amount',
		startDate: undefined,
		endDate: undefined
	});
})

test('should setup a startDate as 1000', () => {
	const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: 1000});
	expect(state).toEqual({
		text: '',
		sortBy: 'date',
		startDate: 1000,
		endDate: undefined
	});
})

test('should setup a endDate as 1000', () => {
	const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: 1000});
	expect(state).toEqual({
		text: '',
		sortBy: 'date',
		startDate: undefined,
		endDate: 1000
	});
})