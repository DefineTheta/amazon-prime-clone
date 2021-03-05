export interface MediaData {
	id: number;
	img_url: string;
}

const mediaDataArr = [
	{
		id: 1,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/c606b7167797203fa04e17b9186e9ecf6be026eff404bb883a6854b1b2d956ff.jpg',
	},
	{
		id: 2,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/b1e54a74471606880881a7ebc7f566e725bfda6665ee3f59e97ea2fe0ffa5b8a.jpg',
	},
	{
		id: 3,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/d008eabe3eba54ee0967a0627669e55a3f2b42de5bffb7db8c5fcb0baec7fb20.jpg',
	},
	{
		id: 4,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/23be87d7b0c20929b74b7094ccf893decc9051d4bcc4ec564f4f6ffe4ec8f615.png',
	},
	{
		id: 5,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/2f9e59e40be4d4e71878f7262ea516898d1fb7d06da7f528e6919b125fe0807f.jpg',
	},
	{
		id: 6,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/6446cac0084df245cac4cff5dc2a073430634a403b23cfc817fedf4c1a6aa794.jpg',
	},
	{
		id: 7,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/eb72efd184c6018a609d00c8164b3bcfb965f7e7f8f5d1fd29130430c77d2119.jpg',
	},
	{
		id: 8,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/82315b4061f939e81379b4b08d2f0c12bac27a5eadd9895e78d45adfbfe9d9b6.jpg',
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
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/9c8ed6a24109698cea04490c929fac9247c75f8bd769bbd2d9e9b84602efb393.jpg',
	},
	{
		id: 12,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/a6dde258ad4c221ead469cddae31586f70f661ab7b96ff60f0d8ae2ab5f2990d.png',
	},
	{
		id: 13,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/aa6fd4edb9d4c72a804f20ab24bc75c80b899b2e24d037a80add265dbace1fae.jpg',
	},
	{
		id: 14,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/635e6d57626206e87e59a2ac7132acb1cb75f473efd33a5cedfd1a1413667263.png',
	},
	{
		id: 15,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/5639ef2f414a30ec18230f0ed3c0e29a660a9445f640666b45ee28805928d983.jpg',
	},
	{
		id: 16,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/fd2e02c6812604c446577dd53a19284857c1dcaceccca74a39380f78268ef8de.jpg',
	},
	{
		id: 17,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/70d4c598d459bed0044c3f4feaf98157a96b887e56270ca97a5f911790703b2a.jpg',
	},
	{
		id: 18,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/a68a0027c630811504d6b4e1b70e3a883ced3a04694cce13f5cd58a54fe7933f.jpg',
	},
	{
		id: 19,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/687673ab6a31ab043a213c8ca81d8bf59060a389c92073b94ad82270a7164710.jpg',
	},
	{
		id: 20,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/3645af6707cd9483525d51f9134d7261efa7e1a8525a1ef72227771a0c52f671.png',
	},
	{
		id: 21,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/f5dd7e88912ea87b10dec26181d59336ee287b5f3aed7f03b290f97c138eb261.jpg',
	},
	{
		id: 22,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/5c8a1508455beb64f82812501bed233fe12fc1a6e102c0f2cc42d74a4164f5b0.jpg',
	},
	{
		id: 23,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/781eef50007e0520b8a4bf4dbe57442c8f2e13eda5b23407efa9f2f50c6ff4a5.jpg',
	},
	{
		id: 24,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/e00c0942a584368c35894b3e0ed6c8ce3060e6c25c9be470097bd8dc98001a71.jpg',
	},
	{
		id: 25,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/0b2c1d2b910f7b97fd54111fb51873d572e2331df79261854822e847a96fe06d.jpg',
	},
	{
		id: 26,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/0eb6ce817f3c6f6c0572d0e8ab0985027eef762da6d13fe72bc021d6595f4334.jpg',
	},
	{
		id: 27,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/ba775f4a12045c13e692cdf2699e76bbf573db45af177ea845316b6e2a0cd9f0.png',
	},
	{
		id: 28,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/3645af6707cd9483525d51f9134d7261efa7e1a8525a1ef72227771a0c52f671.png',
	},
	{
		id: 29,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/3f0f12f77042566ad2d5c652a06fb19332420e601fa6da9dd41e69e59ab2bee8.jpg',
	},
	{
		id: 30,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/c65bf4430e1b2b7999660a24f6ef005b68cec43cf85d1fcb15dbb669477c55a4.jpg',
	},
	{
		id: 31,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/3645af6707cd9483525d51f9134d7261efa7e1a8525a1ef72227771a0c52f671.png',
	},
	{
		id: 32,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/02e76c7f9a90ee3feed27f9483001eb90ef3548ab5a13db0f01da9c5841c46af.jpg',
	},
	{
		id: 33,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/20790cfd694055228a98748b44a172e9199f4bafbb5aae02f3ce1c668bb41907.jpg',
	},
	{
		id: 34,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/7a0a99209a3576a6ff0ab4fcce6a90416efd9a72fbfea1de6019902767d09583.jpg',
	},
	{
		id: 35,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/ac870edb4eacefcc5e4848ee5f922d5d2b45ea32a5920b15ad6851da11750aba.jpg',
	},
	{
		id: 36,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/atv-aps-images/encoded/HANNAH_S2/*/*_*/COVER_ART/FRACTAL.jpg',
	},
	{
		id: 37,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/8b8db8af3fbb3df0446596bc7778062de2df2ff244a00f4765969218597b5b9f.jpg',
	},
	{
		id: 38,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/4986ea3414dba756123db64ba22b3bb1de442623392f7a5dc6c7b1032ea867f2.jpg',
	},
	{
		id: 39,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/c90a7f25527e1d225c564df8d1cb65f517609eb14e7b164b452b6b06b35f517a.jpg',
	},
	{
		id: 40,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/ae1b8084da30e7e870e64b4b9de2e29277f708851e736225997136f36c409a81.jpg',
	},
	{
		id: 41,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/1e3a7d5e1bc9f8ed2426e4fd6786bbffa5f6e6aa88d0503a9240ad0e9d52578b.jpg',
	},
	{
		id: 42,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/17fbd04edba0b1907cb5686ca025edb89d5b9e859955ae9fd32860226eaba670.jpg',
	},
	{
		id: 43,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/d52d82000584b049d5b119bd2dd74237c152ee3f731c341e0e5f10e0df657e03.jpg',
	},
	{
		id: 44,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/2c47a5b82d321598466e5befc63a182b321ffa1529e432f68b036c1402f06d40.jpg',
	},
	{
		id: 45,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/cce60e690e741203f944049f0a2a6e6f27e02e1e3fae7f8426c642c126cee6ee.jpg',
	},
	{
		id: 46,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/fc0cf31cb4ddbebab6965d40f701694af280f53a11a95445b214451b117bc36d.jpg',
	},
	{
		id: 47,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/963b03db95f0456c091a677eaf4cde2224162b63789c447f0d7bfadde9139fb1.jpg',
	},
	{
		id: 48,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/cf046be67f970b2fd0091e2b57e5c70d05efe42ebfd163cd99e55f94e789960e.jpg',
	},
	{
		id: 49,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/9ae20b4b5d04f8f86b08f3a57b38c8bcc3786c2b8def3efaa3f1b76a901fbbdb.jpg',
	},
	{
		id: 50,
		img_url:
			'https://images-fe.ssl-images-amazon.com/images/S/pv-target-images/9b6b79e6e99fc8d44706f593661cbccf2a36fd92a85e45073a3cd6dba1cced9f.jpg',
	},
];

export const getMediaData = (amount: number): MediaData[] => {
	const indexes = [];

	while (indexes.length < amount) {
		const r = Math.floor(Math.random() * mediaDataArr.length);
		if (indexes.indexOf(r) === -1) indexes.push(r);
	}

	const data = [];
	indexes.forEach((index) => {
		data.push(mediaDataArr[index]);
	});

	return data;
};
