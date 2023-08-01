import React from 'react';
import { InferGetStaticPropsType } from 'next';

const Home = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return <div>Home</div>;
};

export default Home;

export async function getStaticProps() {
	const products = [1, 2, 3];
	return {
		props: {
			products,
		},
		// revalidate every 4 hours
		revalidate: 4 * 60 * 60,
	};
}
