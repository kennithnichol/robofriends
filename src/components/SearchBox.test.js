import {shallow} from 'enzyme';
import React from 'react';
import SearchBox from './SearchBox';

describe('SearchBox component', () => {
	it('Shallow rendering', () => {
		expect(shallow(<SearchBox />)).toMatchSnapshot();
	})
})

