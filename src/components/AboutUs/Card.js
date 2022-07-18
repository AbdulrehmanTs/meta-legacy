import React from 'react';
import styles from './about-us.module.css';

function Card({ data }) {
	console.log('Fata', data);
	return (
		<div className={`${styles.card}`}>
			<div className={`${styles.card_img_div}`}>
				<span className={`img_span`}>
					<img src={data.img} alt={'image'} />
				</span>
			</div>
			<h3 className={`${styles.title}`}>{data.title}</h3>
			<p className={`${styles.text}`}>{data.description}</p>
		</div>
	);
}

export default Card;
