import Header from "./Components/Header"
import Meme from "./Components/Meme"
import Section from "./Components/Section"
import "./style/style.css"

const MemeGeneratorApp = () => {
	return (
		<>
			<Header />
			<Section>
				<Meme />
			</Section>
		</>
	)
}
export default MemeGeneratorApp
