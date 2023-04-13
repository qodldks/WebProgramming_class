import React from "react"
import Joke from "./Components/Joke"
import JokeData from "./Components/JokeData"

const JokeApp = () => {
	const jokeElements = JokeData.map(joke => {
		return <Joke key={joke.id} setUp={joke.setup} punchLine={joke.punchline} />
	})
	return <div>{jokeElements}</div>
}

export default JokeApp
