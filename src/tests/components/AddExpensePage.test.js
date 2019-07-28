import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';

let onSubmit, wrapper, history;

beforeEach(() => {
	onSubmit = jest.fn();
	history = { push: jest.fn() };
	wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history}/>);
})

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

test('should render AddExpensePage render correctly', () => {
	expect(wrapper).toMatchSnapshot();
})

test('Should handle onSubmit', () => {
	wrapper.find('ExpenseForm').prop('onSubmit')(expense[1]);
	expect(history.push).toHaveBeenLastCalledWith("/");
	expect(onSubmit).toHaveBeenLastCalledWith(expense[1]);
})