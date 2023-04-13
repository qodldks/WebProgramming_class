import React, { useState } from "react"

const Joke = ({ key, setUp, punchLine }) => {
	const [isShown, setIsShown] = useState(false)
	/**
	 * Challenge:
	 * - Only display the punchline paragraph if `isShown` is true
	 */
	function toggleShown() {
		setIsShown(prevShown => !prevShown)
	}
	return (
		<div>
			{setUp && <h3>{setUp}</h3>}
			{isShown && <p>{punchLine}</p>}
			<button onClick={toggleShown}>Show Punchline</button>
			<hr />
		</div>
	)
}

export default Joke
