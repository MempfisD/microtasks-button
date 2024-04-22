import React from 'react'
import './App.css'
import { Button } from './components/Button'

// function App() {
// 	// const myFirstSub = (event: MouseEvent<HTMLButtonElement>) => {
// 	// 	console.log('Hi Mi')
// 	// }
// 	// const mySecondSub = (event: MouseEvent<HTMLButtonElement>) => {
// 	// 	console.log('Dima')
// 	// }
// 	// const onClickHandler = (name: string) => {
// 	// 	console.log(name)
// 	// }

// 	const foo1 = () => {
// 		console.log(100200)
// 	}
// 	const foo2 = (num: number) => {
// 		console.log(num)
// 	}
// 	return (
// 		<div className='App'>
// 			{/*<button onClick={(event) => {*/}
// 			{/*	console.log('Hi')*/}
// 			{/*}}>MyYoutubeChanel-1*/}
// 			{/*</button>*/}
// 			{/* <button onClick={() => onClickHandler('Dima')}>MyYoutubeChanel-1</button>
// 			<button onClick={() => onClickHandler('Tanya')}>MyYoutubeChanel-2</button> */}
// 			<button onClick={foo1}>1</button>
// 			<button onClick={() => foo2(100200)}>2</button>
// 		</div>
// 	)
// }

// export default App

// * универсальная кнопка
function App() {
	const Btn1 = (subs: string, age: number) => {
		console.log(subs, age)
	}
	const Btn2 = (subs: string, age: number) => {
		console.log(subs, age)
	}
	const Btn3 = () => {
		console.log('I`m stupid button')
	}

	return (
		<div className={'App'}>
			<Button
				name={'MyYoutubeChanel-1'}
				callBack={() => Btn1('Dima', 22)}
			/>
			<Button
				name={'MyYoutubeChanel-2'}
				callBack={() => Btn2('Tima', 11)}
			/>
			<Button
				name={'Stupid button'}
				callBack={Btn3}
			/>
		</div>
	)
}

export default App
