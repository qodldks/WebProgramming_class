import { useState } from "react"
import memesData from "./memesData"

const Meme = () => {
	// usestate는 렌더링에 적용하고 싶을 때 쓰는 변수 같은 애
	// destructureing해서 많이 씀
	// setter 함수로 값을 변경해야함
	const [randomImg,setRandomImg] = useState()
	const getMemeImage = () => {
		const memesArray = memesData.data.memes
		const randomNumber = Math.floor(Math.random())
		let url = memesArray[randomNumber].url
		console.log(url)
	}
	return (
		<div className="form">
			<input
				type="text"
				className="form--input"
				placeholder="write your meme!"
			/>
			<input
				type="text"
				className="form--input"
				placeholder="write your meme!"
			/>
			<button type="button" onClick={getMemeImage} className="form--button">
				Get a new meme image
			</button>
		</div>
	)
}
export default Meme