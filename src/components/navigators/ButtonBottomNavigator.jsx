import BannerNavArrImg from '../BannerNavArrImg';
import { Link } from 'react-router-dom';

const ButtonBottomNavigator = ({ text, link }) => {
	return (
		<Link className="banner_navigator big-circle" to={link}>
			<h5 className="pointerEventNone">
				{text}
				<BannerNavArrImg />
			</h5>
		</Link>
	);
};

export default ButtonBottomNavigator;
