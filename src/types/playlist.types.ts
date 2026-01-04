import type { IBase, ITrack, Tid, TImageUrl } from './music.types'

export interface IPlaylist extends IBase {
	name: string
	description?: string
	tracks: ITrack[]
	coverImage: TImageUrl
	owner: {
		id: Tid
		displayName: string
		isPremium: boolean
	}
	isPublic: boolean
	followers: number
}
