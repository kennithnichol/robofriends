import { shallow } from 'enzyme';
import React from 'react';
import { App } from './App';

describe('App container', () => {
	let wrapper;
	const mockOnSearchChange = jest.fn();

	beforeEach(() => {
		wrapper = shallow(<App onSearchChange={mockOnSearchChange} />)
	})

	it('expect to render App component', () => {
		expect(wrapper).toMatchSnapshot();
	})
});
