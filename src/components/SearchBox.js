import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className="pa2">
			<label className="dn">Filter robofriends:</label>
			<input
				className="pa3 ba b--green bg-lightest-blue "
				type="search"
				placeholder="Search robots"
				onChange={searchChange}
			/>
		</div>
	)
}

export default SearchBox;
