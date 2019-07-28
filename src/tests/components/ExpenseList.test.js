import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';

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

test('should render the expenseList from expense', ()=>{
	const wrapper = shallow(<ExpenseList expenses={expense} />);
	expect(wrapper).toMatchSnapshot();
})

test('should render the expenseList with no expense message', ()=>{
	const wrapper = shallow(<ExpenseList expenses={[]} />);
	expect(wrapper).toMatchSnapshot();
})