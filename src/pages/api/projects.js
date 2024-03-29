import barringtonThumbnail from '../assets/imgs/projects/barrington/thumbnail.jpg';

const projects = [
	{
		title: 'Barrington Crescent Cricket Club',
		id: 'barrington-crescent-cricket-club',
		category: 'full-stack-development',
		categoryTitle: 'Front End Development',
		thumbnail_image: barringtonThumbnail,
		portfolio_images: [],
	},

	// {
	//     "title": "Crescent Cricket Club",
	//     "id": "crescent_cricket_club",
	//     "category": "front-end-development",
	//     "categoryTitle": "Front End Development",
	//     "thumbnail_image": "https://khansortium.com/portfolios/crescent_cricket_club/crescent_cricket_club.jpeg",
	//     "portfolio_images": []
	// },
	{
		title: 'Gamma Vr',
		id: 'gamma_vr',
		category: 'full-stack-development',
		categoryTitle: 'Front End Development',
		thumbnail_image:
			'https://khansortium.com/portfolios/gamma_vr/gamma_vr.jpeg',
		portfolio_images: [],
	},
	{
		title: 'Khansortium',
		id: 'khansortium',
		category: 'front-end-development',
		categoryTitle: 'Front End Development',
		thumbnail_image:
			'https://khansortium.com/portfolios/khansortium/khansortium.jpeg',
		portfolio_images: [],
	},
	{
		title: 'Whole Cell Accessories',
		id: 'whole_cell_accessories',
		category: 'full-stack-development',
		categoryTitle: 'Front End Development',
		thumbnail_image:
			'https://khansortium.com/portfolios/wholecell/wholecell.jpg',
		portfolio_images: [],
	},
	// {
	//     "title": "Markaz ul Fiqh",
	//     "id": "markaz_ul_fiqh",
	//     "category": "full-stack-development",
	//     "categoryTitle": "Front End Development",
	//     "thumbnail_image": "https://khansortium.com/portfolios/markaz_ul_fiqh/markaz_ul_fiqh.jpeg",
	//     "portfolio_images": []
	// }
];

export default function handler(req, res) {
	res.status(200).json(projects);
}
