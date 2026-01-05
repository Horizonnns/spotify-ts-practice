import type { ITrack } from './music.types'

async function fetchFromSpotify<T>(
	endpoint: string,
	params?: Record<string, string>
): Promise<T> {
	const url = new URL(`/api/${endpoint}`)
	if (params) {
		Object.entries(params).forEach(([key, value]) => {
			url.searchParams.append(key, value)
		})
	}

	const response = await fetch(url.toString())
	const data = (await response.json()) as { data: T }

	return data.data
}

const track = await fetchFromSpotify<ITrack>('tracks/1')
const playlist = await fetchFromSpotify<ITrack>('playlists/1/tracks', {
	page: '1',
	limit: '10'
})
