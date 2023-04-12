import Header from "./components/Header"
import Journal from "./components/Journal"
import JournalList from "./components/JournalList"
import JournalData from "./components/JournalData"
import "./style/style.css"
import React from "react"

export const TravelJournalApp = () => {
	return (
		<>
			<Header />
			<JournalList>
				{JournalData.map(data => {
					return (
						<Journal
							img={data.img}
							title={data.title}
							country={data.country}
							googleMap={data.googleMap}
							period={data.period}
							desc={data.desc}
						/>
					)
				})}
			</JournalList>
		</>
	)
}
