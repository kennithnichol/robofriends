import {shallow} from 'enzyme';
import React from 'react';
import ErrorBoundry from './ErrorBoundry';

describe('ErrorBoundry component', () => {
	it('displays an error', () => {
		const mockProps = {
			hasError: true
		}

		expect(shallow(<ErrorBoundry {...mockProps} />)).toMatchSnapshot();
	})

	it('displays children', () => {
		expect(shallow(<ErrorBoundry />)).toMatchSnapshot()
	})
})