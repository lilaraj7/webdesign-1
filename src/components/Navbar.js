import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './navbar.css'

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h3>AR Shakir</h3>
			<nav ref={navRef}>
				<a href="/#">Product</a>
				<a href="/#">Template</a>
				<a href="/#">Blog</a>
				<a href="/#">Pricing</a>
        <a href="/#"> Singin</a>
        <a href="/#"><div className='btn-start'>StartFree</div></a>

        
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;