import locationPin from "../img/location.png"

const Journal = ({ img, title, country, googleMap, period, desc }) => {
	return (
		<div className="journal">
			<div className="journal--content">
				<div className="thumbnail">
					<img src={img} className="journal--img" alt="bg" />
				</div>
				<div className="journal--textbox">
					<div className="journal--location">
						<span className="journal--countryWrap">
							<img
								src={locationPin}
								className="locationPin"
								alt="location pin"
							/>
							<p className="journal--country">{country}</p>
						</span>
						<a href={googleMap} className="journal--googleMap">
							View on Google Maps
						</a>
					</div>
					<h2 className="journal--title">{title}</h2>
					<p className="journal--period">
						{period[0]} - {period[1]}
					</p>
					<p className="journal--description">{desc}</p>
				</div>
			</div>

			<hr className="journal--hr" />
		</div>
	)
}

export default Journal
