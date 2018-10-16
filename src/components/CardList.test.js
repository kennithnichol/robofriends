import {shallow} from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('expect to render CardList Component', () => {
	const mockRobots = [
		{
			id: 1,
			name: 'John Smith',
			username: 'jsmith',
			email:'john.smith@example.com'
		}
	]
	expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
})

