import { Link } from 'react-router-dom';
import styles from './footer.module.css';
import logo from '../../assets/imgs/logos/META LOGO-01.svg';
import fb from '../../assets/imgs/icons/fb.svg';
import wa from '../../assets/imgs/icons/wa.svg';
import tw from '../../assets/imgs/icons/tw.svg';
import gm from '../../assets/imgs/icons/gm.svg';

function Footer() {
	return (
		<footer className={`${styles.footer}`}>
			<div className={`${styles.container}`}>
				<div className={`${styles.row_div}`}>
					<div className={`${styles.col_1}`}>
						<div className={`${styles.logo_img_div}`}>
							<img src={logo} alt={'image'} />
						</div>
						<p>
							We Build Ideas from Ground up to Make an Impactful
							Head-Start. Your TRUST in Us Defines Your BUSINESS
							in Market.
						</p>
						<p className={`${styles.text_blue}`}>
							info@metalegacy.pk
						</p>
						<p className={`${styles.text_blue}`}>
							Suite# 202, Second Floor Mustafa Centre, Gizri,
							Karachi, 75500, Pakistan
						</p>
					</div>
					<div className={`${styles.col_2}`}>
						<h2>LINKS</h2>
						<ul>
							<li>
								<a>
									<Link to="/">Home</Link>
								</a>
							</li>
							<li>
								<a>
									<Link to="/projects">Portfolio</Link>
								</a>
							</li>
							<li>
								<a>
									<Link to="/about-us">About Us</Link>
								</a>
							</li>
							<li>
								<a>
									<Link to="/contact-us">Contact</Link>
								</a>
							</li>
						</ul>
					</div>
					<div className={`${styles.col_3}`}>
						{/* <div className={`${styles.col_3_flex_div}`}>
              <h2>SUPPPORT</h2>
              <ul>
                <li>
                  <a>
                    <Link to="#">Privacy Policy</Link>
                  </a>
                </li>
                <li>
                  <a>
                    <Link to="#">Refund Policy</Link>
                  </a>
                </li>
              </ul>
            </div> */}
						<div
							className={`${styles.social_media_icons} social-media-icons`}
						>
							<div className={`${styles.icon_img_div}`}>
								<a href="/">
									<img src={fb} alt={'icon'} />
								</a>
							</div>
							<div className={`${styles.icon_img_div}`}>
								<a href="/">
									<img src={wa} alt={'icon'} />
								</a>
							</div>
							<div className={`${styles.icon_img_div}`}>
								<a href="/">
									<img src={tw} alt={'icon'} />
								</a>
							</div>
							<div className={`${styles.icon_img_div}`}>
								<a href="/">
									<img src={gm} alt={'icon'} />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={`${styles.copywrite_div}`}>
				<div className={`${styles.container}`}>
					<p>Copyright @ 2022, metalegacy.com</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
