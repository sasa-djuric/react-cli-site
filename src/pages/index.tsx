import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>React CLI</title>
				<meta name='description' content='An open-source CLI tool for generating boilerplate react files.' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main></main>
		</div>
	);
};

export default Home;
