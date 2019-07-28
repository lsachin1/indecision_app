const filtersReducersDefaultState = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined
}

export const filtersReducer = (state = filtersReducersDefaultState, action) => {
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