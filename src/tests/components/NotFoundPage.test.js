import React from 'react';
import { shallow} from 'enzyme';
import { pageNotFound } from '../../components/pageNotFound';

test('should render not found page correctly', () => {
	const wrapper = shallow(<pageNotFound />);
	expect(wrapper).toMatchSnapshot();
})

