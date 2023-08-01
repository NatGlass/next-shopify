const fetchApi = async () => {
	const url = 'https://jsonplaceholder.typicode.com/posts';

	const res = await fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	const data = await res.json();
	return { data };
};

export default async function getAllProducts(): Promise<any[]> {
	const products = await fetchApi();
	return products.data;
}
