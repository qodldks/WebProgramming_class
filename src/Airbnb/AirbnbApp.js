import "./style/style.css"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Card from "./Components/Card"
import AirbnbData from "./Components/AirbnbData"
import CardWrapper from "./Components/CardWrapper"

export default function AirbnbApp() {
	return (
		<div className="App">
			<Navbar />
			<Hero />
			<CardWrapper>
				{AirbnbData.map(data => {
					return (
						<Card
							title={data.title}
							img={`AirbnbImg/${data.coverImg}`}
							rating={parseFloat(data.stats.rating).toFixed(1)}
							reviewCount={data.stats.reviewCount}
							country={
								data.location === "Online" ? "USA" : data.location
							}
							price={data.price}
							openSpots={data.openSpots}
						/>
					)
				})}
			</CardWrapper>
		</div>
	)
}
