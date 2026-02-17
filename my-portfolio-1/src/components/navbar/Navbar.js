import { AnimatePresence, motion } from "framer-motion";
import { BiEnvelope } from "react-icons/bi";
import { FaHome, FaLaptop, FaSchool, FaSuitcase, FaTrophy } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { Link } from "react-scroll";
import ProfileImg from "../../images/my_img.JPG";
import "../../styles/Navbar.css";
import NavLinks from "./NavLinks";

const navVariants = {
	hidden: {
		opacity: 0,
		transition: {
			delay: 0.5,
			staggerChildren: 0.2,
			staggerDirection: -1,
		},
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.5,
			staggerChildren: 0.2,
			staggerDirection: 1,
		},
	},
};

const Navbar = ({ nav, handleNav }) => {
	return (
		<AnimatePresence>
			<motion.nav
				initial={{ width: "0" }}
				animate={
					nav ? { width: "300px" } : { width: "0", transition: { delay: 1 } }
				}
				className={nav ? "navbar active" : "navbar"}>
				<motion.div
					initial='hidden'
					whileInView={nav ? "visible" : "hidden"}
					variants={navVariants}
					exit='hidden'
					className='navbar-container'>
					<div className='top-details'>
						<div className='img__cover'>
							<img src={ProfileImg} alt='Main' className='profile-pic-small' />
						</div>
						<Link
							activeClass='active'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							onClick={handleNav}
							to='home'
							className='profile-name'>
							Do Hoang Nhat Nam
						</Link>
						<NavLinks handleNav={handleNav} />
					</div>
					<ul className='mid-details'>
						<Link
							activeClass='active'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							to='home'
							className='mid-links'>
							<FaHome className='mid-icon' />
							<li className='mid-link' onClick={handleNav}>
								Home
							</li>
						</Link>
						<Link
							activeClass='active'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							to='about'
							className='mid-links'>
							<FiUser className='mid-icon' />
							<li className='mid-link' onClick={handleNav}>
								About
							</li>
						</Link>
						<Link
							activeClass='active'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							to='education'
							className='mid-links'>
							<FaSchool className='mid-icon' />
							<li className='mid-link' onClick={handleNav}>
								Education
							</li>
						</Link>
						<Link
							activeClass='active'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							to='experience'
							className='mid-links'>
							<FaSuitcase className='mid-icon' />
							<li className='mid-link' onClick={handleNav}>
								Work Experience
							</li>
						</Link>
						<Link
							activeClass='active'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							to='achievements'
							className='mid-links'>
							<FaTrophy className='mid-icon' />
							<li className='mid-link' onClick={handleNav}>
								Achievements
							</li>
						</Link>
						<Link
							activeClass='active'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							to='skills'
							className='mid-links'>
							<FaLaptop className='mid-icon' />
							<li className='mid-link' onClick={handleNav}>
								Skills
							</li>
						</Link>
						{/* <Link
							activeClass='active'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							to='services'
							className='mid-links'>
							<BiServer className='mid-icon' />
							<li className='mid-link' onClick={handleNav}>
								Services
							</li>
						</Link> */}
						{/* <Link
							activeClass='active'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							to='works'
							className='mid-links'>
							<BiBookContent className='mid-icon' />
							<li className='mid-link' onClick={handleNav}>
								Works
							</li>
						</Link> */}
						<Link
							activeClass='active'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							to='contact'
							className='mid-links'>
							<BiEnvelope className='mid-icon' />
							<li className='mid-link' onClick={handleNav}>
								Contact
							</li>
						</Link>
					</ul>
					<div className='copy'>
						<small className='copyright'>
							© Copyright ©2026 | All rights reserved
						</small>
					</div>
				</motion.div>
			</motion.nav>
		</AnimatePresence>
	);
};

export default Navbar;
