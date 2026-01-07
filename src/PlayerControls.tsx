import type { MouseEvent } from 'react'

interface Props {
	onseek: (time: number) => void
}

export function PlayerControls({ onseek }: Props) {
	const handleProgressClick = (e: MouseEvent<HTMLDivElement>) => {
		const rect = e.currentTarget.getBoundingClientRect()
		const percente = (e.clientX - rect.left) / rect.width
		onseek(percente * 100)
	}

	return (
		<div className='controls'>
			<div
				className='progress-bar'
				onClick={handleProgressClick}
			></div>
		</div>
	)
}
