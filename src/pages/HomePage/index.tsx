import React from 'react';

import ItemCarousel from './components/ItemCarousel';

import './style.scss';

const data = [
	{
		id: 1,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/eb72efd184c6018a609d00c8164b3bcfb965f7e7f8f5d1fd29130430c77d2119.jpg',
	},
	{
		id: 2,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/1b683659f862e5a7cae7a007081313c594639ade04ec537eff25dde5d1e17d66.jpg',
	},
	{
		id: 3,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/5be7caca52e7957941e791b9bda109cd1b5841263f55f97c7221f178e5afa2b5.jpg',
	},
	{
		id: 4,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/1882a4e6a841df0a46f6305a2ebfcbcdb455417dca12d1c95319fd70cc2292b5.jpg',
	},
	{
		id: 5,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/635e6d57626206e87e59a2ac7132acb1cb75f473efd33a5cedfd1a1413667263.png',
	},
	{
		id: 6,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/635e6d57626206e87e59a2ac7132acb1cb75f473efd33a5cedfd1a1413667263.png',
	},
	{
		id: 7,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/635e6d57626206e87e59a2ac7132acb1cb75f473efd33a5cedfd1a1413667263.png',
	},
	{
		id: 8,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/1882a4e6a841df0a46f6305a2ebfcbcdb455417dca12d1c95319fd70cc2292b5.jpg',
	},
	{
		id: 9,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/1882a4e6a841df0a46f6305a2ebfcbcdb455417dca12d1c95319fd70cc2292b5.jpg',
	},
	{
		id: 10,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/5be7caca52e7957941e791b9bda109cd1b5841263f55f97c7221f178e5afa2b5.jpg',
	},
	{
		id: 11,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/5be7caca52e7957941e791b9bda109cd1b5841263f55f97c7221f178e5afa2b5.jpg',
	},
	{
		id: 12,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/5be7caca52e7957941e791b9bda109cd1b5841263f55f97c7221f178e5afa2b5.jpg',
	},
];

const HomePage: React.FC = () => {
	return (
		<div className='container'>
			<ItemCarousel items={data} />
		</div>
	);
};

export default HomePage;
