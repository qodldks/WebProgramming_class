const Joke = ({ setUp, punchLine }) => {
	return (
		<>
			{setUp && <h3>{setUp}</h3>}
			<p>{punchLine}</p>
			<hr/>
		</>
	)
}

export default Joke
