import type { ITrack } from './types/music.types'

interface Props {
	track: ITrack
}

export function Track({ track }: Props) {
	return <div>title: {track?.title}</div>
}
