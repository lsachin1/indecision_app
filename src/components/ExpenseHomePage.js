import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

export const ExpenseDashBoardPage = () => (
		<div>
			<ExpenseListFilters />
			<ExpenseList />
		</div>
);