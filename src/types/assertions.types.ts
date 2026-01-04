import type { ITrack } from './music.types'

export const audioElememt = document.getElementById('audio') as HTMLAudioElement | null
export const progressBar = document.querySelector('.progress') as HTMLDivElement | null

interface ISpotifyResponse {
	tracks: ITrack[]
}

export async function fetchTracks(): Promise<ITrack[]> {
	const response = await fetch('/api/tracks')
	const data = (await response.json()) as ISpotifyResponse

	return data.tracks
}
