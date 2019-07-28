import React from 'react';
import { shallow} from 'enzyme';
import { ExpenseDashBoardPage } from '../components/ExpenseHomePage';

test('should render Expense DashBoard Page page correctly', () => {
	const wrapper = shallow(<ExpenseDashBoardPage />);
	expect(wrapper).toMatchSnapshot();
})

