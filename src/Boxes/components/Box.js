import React, { useState } from "react"
import BoxData from "./BoxData"

const Box = ({ on, id, toggle }) => {
	// const [darkMode, setDarkMode] = useState(on)
	const styles = {
		backgroundColor: on ? "#222222" : "#EDEDED",
	}

	return (
		<div
			onClick={() => toggle(id)}
			key={id}
			className="box"
			style={styles}></div>
	)
}

export default Box
