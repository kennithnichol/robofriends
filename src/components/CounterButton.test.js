import {shallow} from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';
describe('CounterButton component', () => {
	const mockColor = 'red';
	const wrapper = shallow(<CounterButton color={mockColor} />);

	it('expect to render CounterButton Component', () => {
		expect(wrapper).toMatchSnapshot();
	})

	it('correctly increments the counter', () => {
		wrapper.find('button').first().simulate('click');
		expect(wrapper.state()).toEqual({count: 1});
	})
})

