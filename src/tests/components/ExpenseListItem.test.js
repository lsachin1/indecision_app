import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListItem } from '../../components/ExpenseListItem';

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

test('render the expense individual iteam with passes values', () => {
	const wrapper = shallow(<ExpenseListItem {...expense[0]} />);
	expect(wrapper).toMatchSnapshot();
})