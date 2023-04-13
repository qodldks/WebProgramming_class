import React, { useState } from "react"
import BoxData from "./components/BoxData"
import "./style/style.css"
import Box from "./components/Box"

const BoxesApp = () => {
	const [square, setSquare] = useState(BoxData)

	const toggle = id => {
		setSquare(prevSquare => {
			return prevSquare.map(square => {
				return square.id === id ? { ...square, on: !square.on } : square
			})
		})
	}
	return (
		<>
			{square.map(e => {
				return <Box on={e.on} id={e.id} key={e.id} toggle={toggle} />
			})}
		</>
	)
}
export default BoxesApp
