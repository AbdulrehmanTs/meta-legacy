import './styles/globals.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/home';
import AboutUs from './pages/about-us';
import ContactUs from './pages/contact-us';
import Projects from './pages/projects';
import ProjectDetail from './pages/ProjectDetail';
import Services from './pages/services';
import Services2 from './pages/services2';
import Service from './pages/servicesid';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about-us" element={<AboutUs />} />
				<Route path="/contact-us" element={<ContactUs />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/projects/:slug" element={<ProjectDetail />} />
				<Route path="/services" element={<Services />} />
				<Route path="/services/:servicesid" element={<Service />} />
				<Route path="/services2" element={<Services2 />} />
				<Route path="/about-us" element={<AboutUs />} />

				{/* <Route path="*" element={<Home />} /> */}
			</Routes>
		</Router>
	);
}

export default App;
