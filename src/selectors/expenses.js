export const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) => {
	
	return expenses.filter(
		(expense) => {
			const startDateMatch = typeof startDate !== "number" || startDate <= expense.createdAt;
			const endDateMatch = typeof endDate !== "number" || endDate >= expense.createdAt;
			const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
			return startDateMatch && endDateMatch && textMatch
		}
	).sort(( a, b) => {

		//console.log("--xxx---"+sortBy);
		//console.log(a);
		//console.log(b);

		if(sortBy === 'date'){
			return a.createdAt < b.createdAt ? 1 : -1
		}
		
		if(sortBy === 'amount'){
			//console.log(a.amount);
			//console.log(b.amount);
			return a.amount < b.amount ? 1: -1;
		}
		
	})
}