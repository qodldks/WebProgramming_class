import { useEffect, useState } from "react"
import memesData from "./memesData"

const Meme = () => {
	// usestate는 렌더링에 적용하고 싶을 때 쓰는 변수 같은 애
	// destructureing해서 많이 씀
	// setter 함수로 값을 변경해야함
	const [meme, setMeme] = useState({
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg",
	})

	const [allMemeImages, setAllMemeImages] = useState(memesData)

	useEffect(() => {
		fetch("https://api.imgflip.com/get_memes")
			.then(res => res.json())
			.then(data => setAllMemeImages(data.data.memes))
	}, [allMemeImages])

	const getMemeImage = () => {
		const randomNumber = Math.floor(Math.random() * allMemeImages.length)

		setMeme(prevMeme => ({
			...prevMeme,
			randomImage: allMemeImages[randomNumber].url,
		}))
		console.log(meme)
	}

	function handleChange(e) {
		const { name, value } = e.target
		setMeme(prevMeme => ({
			...prevMeme,
			[name]: value,
		}))
	}

	return (
		<>
			<div className="form">
				<input
					type="text"
					placeholder="write top text"
					className="form--input"
					name="topText"
					value={meme.topText}
					onChange={handleChange}
				/>
				<input
					type="text"
					placeholder="write bottom text"
					className="form--input"
					name="bottomText"
					value={meme.bottomText}
					onChange={handleChange}
				/>
				<button type="button" onClick={getMemeImage} className="form--button">
					Get a new meme image
				</button>
			</div>
			<img src={meme.randomImage} className="meme--image" alt="meme" />
			<h2 className="meme--text top">{meme.topText}</h2>
			<h2 className="meme--text bottom">{meme.bottomText}</h2>
		</>
	)
}
export default Meme
