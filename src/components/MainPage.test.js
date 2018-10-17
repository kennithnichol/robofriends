import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

describe('MainPage component', () => {
	let wrapper;
	beforeEach(() => {
		const mockProps = {
			onRequestRobots: jest.fn(),
			robots: [],
			searchField: '',
			isPending: false
		}
		wrapper = shallow(<MainPage {...mockProps} />);
	})

	it('renders MainPage without crashing', () => {
		expect(wrapper).toMatchSnapshot();
	})

	it('filters robots correctly', () => {
		const mockProps2 = {
			onRequestRobots: jest.fn(),
			robots: [{
				id :3,
				name: 'John',
				email: 'john@example.com'
			}],
			searchField: 'john',
			isPending: false
		}
		const wrapper2 = shallow(<MainPage {...mockProps2 } />)
		expect(wrapper2.instance().filterRobots()).toEqual([{
			id :3,
			name: 'John',
			email: 'john@example.com'
		}])
	})

	it('filters robots correctly 2', () => {
		const mockProps3 = {
			onRequestRobots: jest.fn(),
			robots: [{
				id :3,
				name: 'John',
				email: 'john@example.com'
			}],
			searchField: 'a',
			isPending: false
		}
		const wrapper2 = shallow(<MainPage {...mockProps3 } />)
		expect(wrapper2.instance().filterRobots()).toEqual([])
	})

	it('displaying "loading" when a request is pending', () => {
		const mockProps4 = {
			onRequestRobots: jest.fn(),
			robots: [],
			searchField: '',
			isPending: true
		}
		const wrapper3 = shallow(<MainPage {...mockProps4} />)
		expect(wrapper3).toMatchSnapshot()
	})

})