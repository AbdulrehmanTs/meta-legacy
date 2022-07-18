import khansortium from '../../assets/imgs/portfolios/khansortium/khansortium.jpeg';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
	// console.log("project card",project)
	return (
		<div data-category={project.category} className={styles.Project_Card}>
			<Link to={'/projects/' + project.id}>{/* <a></a> */}</Link>
			<div className={styles.Project_Image}>
				<img
					alt={project.title}
					src={project.thumbnail_image}
					// width="800"
					// height="800"
				/>
			</div>
			<div className={styles.Project_Content}>
				<h4 className={'heading text-animation ' + styles.ta}>
					<span>{project.title}</span>
				</h4>
				<span className={'text-animation ' + styles.ta}>
					<span>{project.categoryTitle}</span>
				</span>
			</div>
		</div>
	);
};

export default ProjectCard;
