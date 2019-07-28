// SET_TEXT_FILTERS
export const setFitersText = (
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
export const setSortByDate = (sortBy) => { //console.log('in date'+sortBy);
	return {
		type: 'SORT_BY_DATE',
		sortBy
	}
}
// SORT_BY_AMOUNT
export const setSortByAmount = (sortBy) => { //console.log('in amount'+sortBy);
	return {
		type: 'SORT_BY_AMOUNT',
		sortBy
	}
}
// SET_START_DATE
export const setStartDate = (startDate) => {
	return {
		type: 'SET_START_DATE',
		startDate
	}
}
// SET_END_DATE
export const setEndDate = (endDate) => {
	return {
		type: 'SET_END_DATE',
		endDate
	}
}