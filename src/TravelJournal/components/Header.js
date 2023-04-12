import logo from "../img/logo.png"

const Header = () => {
	return (
		<header>
			<img src={logo} className="header--logo" alt="logo" />
			<p className="header--title">my travel journal.</p>
		</header>
	)
}

export default Header
