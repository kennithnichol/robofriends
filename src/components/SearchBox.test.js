import {shallow} from 'enzyme';
import React from 'react';
import SearchBox from './SearchBox';

describe('SearchBox component', () => {
	it('Shallow rendering', () => {
		const wrapper = shallow(<SearchBox searchField={1} searchChange={2} />);
		const instance = wrapper.instance();
		// expect(wrapper.state(''))
	})
})

