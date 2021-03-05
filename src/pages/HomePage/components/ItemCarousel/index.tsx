import React, { useRef, useState } from 'react';

import ItemCard from '../ItemCard';

import { smoothScroll } from '@/helpers/smoothScroll';

import './style.scss';

interface ItemCarouselProps {
	items: { id: number; img_url: string }[];
}

const ItemCarousel: React.FC<ItemCarouselProps> = ({ items }) => {
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
			{showPrev && (
				<button
					className='item-carousel__btn item-carousel__btn--prev'
					onClick={handlePrevClick}
				/>
			)}
			<div className='item-carousel__list' ref={carouselRef}>
				{items.map((item) => (
					<ItemCard key={item.id} imgUrl={item.img_url} />
				))}
			</div>
			{showNext && (
				<button
					className='item-carousel__btn item-carousel__btn--next'
					onClick={handleNextClick}
				/>
			)}
		</div>
	);
};

export default ItemCarousel;
