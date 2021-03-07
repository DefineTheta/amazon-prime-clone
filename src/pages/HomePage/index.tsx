import React from 'react';

import ItemCarousel from './components/ItemCarousel';

import { getMediaData } from '@/data/dummy';

import './style.scss';

const watchNextData = getMediaData(20);
const originalsData = getMediaData(18);
const recommendedData = getMediaData(30);
const topData = getMediaData(15);
const mightLikeData = getMediaData(16);
const recentlyAddedData = getMediaData(24);

const HomePage: React.FC = () => {
	return (
		<div className='container'>
			<ItemCarousel title='Watch next TV and movies' items={watchNextData} />
			<ItemCarousel title='Amazon Originals and Exclusives' items={originalsData} />
			<ItemCarousel title='Recommended movies' items={recommendedData} />
			<ItemCarousel title='Top Movies' items={topData} />
			<ItemCarousel title='TV shows we think you will like' items={mightLikeData} />
			<ItemCarousel title='Recently added movies' items={recentlyAddedData} />
		</div>
	);
};

export default HomePage;
