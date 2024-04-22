import React from 'react'
import './App.css'

function App() {
	// const myFirstSub = (event: MouseEvent<HTMLButtonElement>) => {
	// 	console.log('Hi Mi')
	// }
	// const mySecondSub = (event: MouseEvent<HTMLButtonElement>) => {
	// 	console.log('Dima')
	// }
	// const onClickHandler = (name: string) => {
	// 	console.log(name)
	// }

	const foo1 = () => {
		console.log(100200)
	}
	const foo2 = (num: number) => {
		console.log(num)
	}
	return (
		<div className='App'>
			{/*<button onClick={(event) => {*/}
			{/*	console.log('Hi')*/}
			{/*}}>MyYoutubeChanel-1*/}
			{/*</button>*/}
			{/* <button onClick={() => onClickHandler('Dima')}>MyYoutubeChanel-1</button>
			<button onClick={() => onClickHandler('Tanya')}>MyYoutubeChanel-2</button> */}
			<button onClick={foo1}>1</button>
			<button onClick={() => foo2(100200)}>2</button>
		</div>
	)
}

export default App
