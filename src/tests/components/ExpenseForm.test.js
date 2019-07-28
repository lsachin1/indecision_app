import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';

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

test('should render the expense form correctly', () => {
	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper).toMatchSnapshot();
})

test('should render expense form with expense data', () => {
	const wrapper = shallow(<ExpenseForm expense={expense[1]} />);
	expect(wrapper).toMatchSnapshot();
})

test('should render the error for the invalid form submission', () =>{
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('form').simulate('submit', {
		preventDefault: () => {}
	});
	expect(wrapper.state('error').length).toBeGreaterThan(0);
	expect(wrapper).toMatchSnapshot();
})

test('should set the description on input change', ()=>{
	const value = "new description";
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('input').at(0).simulate('change', {
		target: { value }
	})

	expect(wrapper.state('description')).toBe(value);
})

test('should set notes on textarea', () => {
	const value = "new notes";
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('textarea').at(0).simulate('change', {
		target: { value }
	})

	expect(wrapper.state('notes')).toBe(value);

});

test('should set the amount for the valid input', () => {
	const value = 12.45;
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('input').at(1).simulate('change', {
		target: { value }
	})

	expect(wrapper.state('amount')).toBe(value);
});

test('should set the amount for the valid input', () =>{
	const value = 12.145;
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('input').at(1).simulate('change', {
		target: { value }
	})

	expect(wrapper.state('amount')).toBe('');
})

test('should call onSubmit props for valid form submission', () => {
	const onSubmitSpy = jest.fn();
	const wrapper = shallow(<ExpenseForm onSubmit={onSubmitSpy} expense={expense[1]} />);
	wrapper.find('form').simulate('submit', {
		preventDefault: () => {}
	})
	expect(wrapper.state('error')).toBe('');
	expect(onSubmitSpy).toHaveBeenLastCalledWith({
		description: expense[1].description,
		amount: expense[1].amount,
		notes: expense[1].notes,
		createdAt: expense[1].createdAt
	})
})

test('should set the createdAt on date change', () => {
	const now = moment();
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('SingleDatePicker').prop('onDateChange')(now);
	expect(wrapper.state('createdAt')).toEqual(now);
})

test('should set the focus of the calendar on focus change', () => {
	const focused = false;
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
	console.log(wrapper.state('focused'));
	expect(wrapper.state('focused')).toBe(focused);
})
