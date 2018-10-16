import {shallow} from 'enzyme';
import React from 'react';
import Header from './Header';

describe('Header component', () => {
	it('expect to render Header Component', () => {
		expect(shallow(<Header />)).toMatchSnapshot();
	})

	it('expect not to update', () => {
		const wrapper = shallow(<Header />);
		const instance = wrapper.instance();
		expect(instance.shouldComponentUpdate()).toEqual(false);
	})
})

