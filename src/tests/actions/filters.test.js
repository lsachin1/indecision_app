import moment from 'moment';
import { setFitersText, setSortByDate, setSortByAmount, setStartDate, setEndDate} from '../../actions/filters';

test('should set the filter text', ()=>{
	const filters = setFitersText({text: 'Rent'});
	expect(filters).toEqual({
		type: 'SET_TEXT_FILTERS',
		text: 'Rent'
	})
})

test('should set filter text to balnk', ()=>{
	const filters = setFitersText({text: ''});
	expect(filters).toEqual({
		type: 'SET_TEXT_FILTERS',
		text: ''
	})
})

test('should set filter sortBy to date', () =>{
	const filters = setSortByDate('date');
	expect(filters).toEqual({
		type: 'SORT_BY_DATE',
		sortBy: 'date'
	})
})

test('should set filter sortBy to amount', () =>{
	const filters = setSortByAmount('amount');
	expect(filters).toEqual({
		type: 'SORT_BY_AMOUNT',
		sortBy: 'amount'
	})
})

test('should set start date', () => {
	const filters = setStartDate(moment(0))
	expect(filters).toEqual({
		type: 'SET_START_DATE',
		startDate: moment(0)
	})
})

test('should set end date', () => {
	const filters = setEndDate(moment(0))
	expect(filters).toEqual({
		type: 'SET_END_DATE',
		endDate: moment(0)
	})
})