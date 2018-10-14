import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className="pa2">
			<label>
				<span className="dn">Filter robofriends</span>
				<input
					className="pa3 ba b--green bg-lightest-blue "
					type="search"
					placeholder="Search robots"
					onChange={searchChange}
				/>
			</label>
		</div>
	)
}

export default SearchBox;
