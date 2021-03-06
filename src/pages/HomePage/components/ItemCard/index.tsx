import React, { useState } from 'react';

import './style.scss';

interface ItemCardProps {
	imgUrl: string;
}

const ItemCard: React.FC<ItemCardProps> = ({ imgUrl }) => {
	const [a, setA] = useState('a');

	return (
		<div className='item-card'>
			<img className='item-card__img' src={imgUrl} />
		</div>
	);
};

export default ItemCard;
