import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import Timer from './Timer';

export const ExpenseDashBoardPage = () => (
		<div>
			<Timer />
			<ExpenseListFilters />
			<ExpenseList />
		</div>
);