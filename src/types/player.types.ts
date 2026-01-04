import type { ITrack } from './music.types'

export interface IPlayerState {
	currentTrack: ITrack | null
	queuq: ITrack[]
	history: ITrack[]
	isPlaying: boolean
	volume: number
	currentTime: number
	repeatMode: 'off' | 'on' | 'all'
	isShuffling: boolean
}
