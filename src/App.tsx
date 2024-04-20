import React, {MouseEvent} from 'react'
import './App.css'

function App() {
	// const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
	// 	console.log('Hello I`m Vasya!')
	// }
	//
	// const mySecondSubsciber = (event: MouseEvent<HTMLButtonElement>) => {
	// 	console.log('Hello I`m Ivan!')
	// }

	const onClickHandler = (name: string) => {
		console.log(name)
	}


	return (
			<div className="App">
				{/* <button
				onClick={event => {
					console.log('Hello')
				}}
			>
				MyYouTubeChanel-1
			</button> */}
				<button
						onClick={(event: MouseEvent<HTMLButtonElement>) =>
								onClickHandler('Vasya!')
						}
				>
					MyYouTubeChanel-1
				</button>
				<button
						onClick={(event: MouseEvent<HTMLButtonElement>) =>
								onClickHandler('Ivan!')
						}
				>
					MyYouTubeChanel-2
				</button>

			</div>

	)
}

export default App
