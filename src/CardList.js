import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
	return (
		<div>
			{
				robots.map((user, index) => (
					<Card
						key={index}
						id={user.id}
						email={user.email}
						name={user.name}
						username={user.username}
					/>
				))
			}
		</div>
	);
};

export default CardList;
