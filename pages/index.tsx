import React from 'react';
import { InferGetStaticPropsType } from 'next';
import getAllProducts from '@/framework/shopify/product/getAllProducts';

const Home = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return <div>{products}</div>;
};

export default Home;

export async function getStaticProps() {
	const products = await getAllProducts();
	return {
		props: {
			products,
		},
		// revalidate every 4 hours
		revalidate: 4 * 60 * 60,
	};
}
