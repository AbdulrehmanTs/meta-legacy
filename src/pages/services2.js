import React from 'react';
import Layout from '../components/layout/Layout';
import GetAQoute from '../components/GetAQuote/GetAQoute';
import AllServices from '../components/Services/AllServices';
import Hero from '../components/Services/Hero';

export default function Services2() {
	return (
		<>
			<Layout>
				<div className="services">
					<Hero />
					<AllServices />
					<GetAQoute />

					<div className="firstLayer"></div>
					{/* <Banner  bannerContent={bannerContent} /> */}
					{/* <SideNavigators/> */}
				</div>
			</Layout>
		</>
	);
}
