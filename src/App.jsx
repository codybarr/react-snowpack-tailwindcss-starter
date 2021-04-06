import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

const { SNOWPACK_PUBLIC_API_URL } = import.meta.env

function App() {
	const [count, setCount] = useState(0)
	useEffect(() => {
		const timer = setTimeout(() => setCount(count + 1), 1000)
		return () => clearTimeout(timer)
	}, [count, setCount])

	return (
		<div className="App">
			<header className="App-header bg-gray-700">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Page has been open for <code>{count}</code> seconds. Yo!
				</p>
				<p>
					This is an environment variable! : {SNOWPACK_PUBLIC_API_URL}
				</p>
			</header>
		</div>
	)
}

export default App
