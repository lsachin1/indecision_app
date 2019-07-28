import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';

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


test('should render EditExpense Page correctly', () => {
	const onSubmit = jest.fn();
	const history = { push: jest.fn() };
	const wrapper = shallow(<EditExpensePage onSubmit={onSubmit} history={history} expense={expense[1]}/>);
	expect(wrapper).toMatchSnapshot();
})

test('should handle onsubmit', () => {
	const onSubmit = jest.fn();
	const history = { push: jest.fn() };
	const wrapper = shallow(<EditExpensePage onSubmit={onSubmit} history={history} expense={expense[1]}/>);
	wrapper.find('ExpenseForm').prop('onSubmit')(expense[1]);
	expect(history.push).toHaveBeenLastCalledWith("/");
	expect(onSubmit).toHaveBeenLastCalledWith(expense[1].id, expense[1]);
})