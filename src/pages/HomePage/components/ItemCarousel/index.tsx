import React, { useRef, useState } from 'react';

import ItemCard from '../ItemCard';

import { smoothScroll } from '@/helpers/smoothScroll';

import { MediaData } from '@/data/dummy';

import './style.scss';

interface ItemCarouselProps {
	title: string;
	items: MediaData[];
}

const ItemCarousel: React.FC<ItemCarouselProps> = ({ title, items }) => {
	const carouselRef = useRef<HTMLDivElement>(null);
	const position = useRef(0);

	const [showNext, setShowNext] = useState(true);
	const [showPrev, setShowPrev] = useState(false);

	const handleNextClick = () => {
		if (!showPrev) setShowPrev(true);

		position.current += window.innerWidth;
		console.log(position.current);
		console.log(carouselRef.current.scrollWidth);
		smoothScroll(750, carouselRef.current, position.current, 'scrollLeft');

		console.log(position.current + window.innerWidth);

		if (position.current + window.innerWidth >= carouselRef.current.scrollWidth) {
			position.current = carouselRef.current.scrollWidth - window.innerWidth;
			setShowNext(false);
		}
	};

	const handlePrevClick = () => {
		position.current -= window.innerWidth;
		console.log(position.current);
		console.log(carouselRef.current.scrollWidth);
		smoothScroll(750, carouselRef.current, position.current, 'scrollLeft');

		if (position.current <= 0) {
			position.current = 0;
			setShowPrev(false);
		}

		if (position.current + window.innerWidth < carouselRef.current.scrollWidth) {
			setShowNext(true);
		}
	};

	return (
		<div className='item-carousel'>
			<div className='item-carousel__title'>
				<h2>{title}</h2>
			</div>
			<div className='item-carousel__list'>
				<div className='item-carousel__list__items' ref={carouselRef}>
					{items.map((item) => (
						<ItemCard key={item.id} data={item} />
					))}
				</div>
				{showPrev && (
					<button
						className='item-carousel__btn item-carousel__btn--prev'
						onClick={handlePrevClick}
					/>
				)}
				{showNext && (
					<button
						className='item-carousel__btn item-carousel__btn--next'
						onClick={handleNextClick}
					/>
				)}
			</div>
		</div>
	);
};

export default ItemCarousel;
