import {shallow} from 'enzyme';
import React from 'react';
import Header from './Header';

describe('Header component', () => {
	const wrapper = shallow(<Header />);
	it('expect to render Header Component', () => {
		expect(wrapper).toMatchSnapshot();
	})

	it('expect not to update', () => {
		const instance = wrapper.instance();
		expect(instance.shouldComponentUpdate()).toEqual(false);
	})
})

