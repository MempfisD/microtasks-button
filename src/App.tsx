import React from 'react'
import './App.css'
import { Button } from './components/Button'

function App() {
	const Button1Foo = (subscriber: string, age: number) => {
		console.log(subscriber, age)
	}
	const Button2Foo = (subscriber: string, age: number) => {
		console.log(subscriber, age)
	}
	const Button3Foo = () => {
		console.log('I`m stupid button')
	}
	return (
		<div className='App'>
			<Button
				name={'MyYouTubeChanel-1'}
				callback={() => Button1Foo('I`m Dima', 21)}
			/>
			<Button
				name={'MyYouTubeChanel-2'}
				callback={() => Button2Foo('I`m Tanya', 22)}
			/>
			<Button
				name={'MyYouTubeChanel-2'}
				callback={Button3Foo}
			/>
		</div>
	)
}

export default App
