import trollface from "../img/trollface.png"

const Header = () => {
	return (
		<header className="header">
			<div className="header--logo">
				<img src={trollface} className="header--image" alt="trollface" />
				<h2 className="header--title">Meme Generator</h2>
			</div>
			<h4 className="header--project">React Course - Project 3</h4>
		</header>
	)
}
export default Header
