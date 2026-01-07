import type { ChangeEvent, FormEvent } from 'react'

export function SearchBar() {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const query = e.target.value
		// search
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		// submit
	}

	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			// quick search
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				onChange={handleChange}
				onKeyDown={handleKeyDown}
				placeholder='Search tracks..'
			/>
		</form>
	)
}
