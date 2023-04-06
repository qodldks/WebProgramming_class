import { createRoot } from "react-dom/client"
import App from "./App"
import { StrictMode } from "react"

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

//js 코드는 해당 js파일이 기준경로임
//JSX 코드는 html파일이 기준경로임

root.render(
	<StrictMode>
		<App />
	</StrictMode>
)
