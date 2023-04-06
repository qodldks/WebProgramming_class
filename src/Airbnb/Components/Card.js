const Card = ({
	img,
	reviewCount,
	country,
	title,
	price,
	rating,
	openSpots,
}) => {
	return (
		<div className="card">
			<div className="card--condition">
				{openSpots > 0 ? "Online" : "Offline"}
			</div>
			<img src={img} className="card--image" />
			<div className="card--stats">
				{/* <div>SOLD OUT</div> */}
				<img src="AirbnbImg/star.png" className="card--star" />
				<span>{rating} </span>
				<span className="gray">({reviewCount}) • </span>
				<span className="gray">{country}</span>
			</div>
			<p>{title}</p>
			<p>
				<span className="bold">From ${price}</span> / person
			</p>
		</div>
	)
}
export default Card
