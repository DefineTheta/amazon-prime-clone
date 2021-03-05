import React from 'react';

import './style.scss';

interface ItemCardProps {
	imgUrl: string;
}

const ItemCard: React.FC<ItemCardProps> = ({ imgUrl }) => {
	return (
		<div className='item-card'>
			<img className='item-card__img' src={imgUrl} />
		</div>
	);
};

export default ItemCard;
