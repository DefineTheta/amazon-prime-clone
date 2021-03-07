import React, { useState } from 'react';

import { MediaData } from '@/data/dummy';

import './style.scss';

interface ItemCardProps {
	data: MediaData;
}

const ItemCard: React.FC<ItemCardProps> = ({ data }) => {
	return (
		<div className='item-card'>
			<div className='item-card__box'></div>
			<div className='item-card__container'>
				<img className='item-card__img' src={data.img_url} />
				<div className='item-card__detail'>
					<div className='item-card__action'>
						<button className='play-btn'>
							<svg viewBox='0 0 36 36'>
								<circle className='play-btn__outer' cx='18' cy='18' r='17'></circle>
								<path
									fill='white'
									d='M14.6821364,10.8388295 C14.0320227,10.4648523 13.4998636,10.7726932 13.4998636,11.5226932 L13.4998636,24.4772386 C13.4998636,25.2272386 14.0320227,25.5350795 14.6821364,25.1611023 L25.9542955,18.6797386 C26.6044091,18.3057614 26.6044091,17.6941705 25.9542955,17.3201932 L14.6821364,10.8388295 Z'
								></path>
							</svg>
						</button>
						<div className='item-card__action__right'>
							<button style={{ marginRight: '1rem' }}>
								<svg
									width='22'
									height='22'
									viewBox='0 0 22 22'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M7.66667 3.22217H1V20.9999H18.7778V10.9999'
										stroke='white'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<path
										d='M5.44444 7.66663H8.77778M5.44444 16.5555H14.3333H5.44444ZM5.44444 12.1111H14.3333H5.44444Z'
										stroke='white'
										strokeWidth='2'
										strokeLinecap='round'
									/>
									<path
										d='M12.1111 4.65111L14.6111 7.66667L21 1'
										stroke='white'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</button>
							<button>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 20 20'
									height='20px'
									width='20px'
								>
									<path
										fill='white'
										fillRule='evenodd'
										d='M12,20 C10.152,20 8.455,19.367 7.1,18.314 L18.314,7.1 C19.367,8.455 20,10.152 20,12 C20,16.418 16.418,20 12,20 M4,12 C4,7.582 7.582,4 12,4 C13.848,4 15.545,4.633 16.9,5.686 L5.686,16.9 C4.633,15.545 4,13.848 4,12 M12,2 C6.477,2 2,6.477 2,12 C2,17.523 6.477,22 12,22 C17.523,22 22,17.523 22,12 C22,6.477 17.523,2 12,2'
										transform='translate(-2 -2)'
									></path>
								</svg>
							</button>
						</div>
					</div>
					<div className='item-card__info'>
						<h1>{data.name}</h1>
						<p>{data.description}</p>
						<div className='item-card__info__footer'>
							<span className='item-card__info__footer__year'>{data.year}</span>
							<div className='item-card__info__footer__content-rating'>
								<span>{data.rating}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ItemCard;
