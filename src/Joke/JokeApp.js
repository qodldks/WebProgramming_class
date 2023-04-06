// import "./App.css"
import Joke from "./Components/Joke"
import JokeData from "./Components/JokeData"

function JokeApp() {
	return (
		<>
			{JokeData.map(data => {
				return <Joke setUp={data.setup} punchLine={data.punchline} />
			})}
		</>
	)
}

export default JokeApp
