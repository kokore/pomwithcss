import { Fragment } from 'react'

import Head from 'next/head'

import Header from 'components/header'

const Home = () => (
	<Fragment>
		<Head>
			<title>Pom with CSS</title>
		</Head>

		<main>
			<Header />
		</main>
	</Fragment>
)

export default Home
