import type { IBase, ITrack, Tid } from './music.types'
import type { IPlaylist } from './playlist.types'

export function updateTrack(
	trackId: Tid,
	data: Partial<Omit<ITrack, keyof IBase>>
): void {
	console.log('Updating track: ', trackId, data)
}

interface IUser {
	name?: string
	age?: string
	city?: string
}

export type TUserProfile = Required<IUser>
export type TMainUserProfile = Pick<TUserProfile, 'name' | 'age'>

type TUserDictionary = Record<string, string>
export const userDict: TUserDictionary = {
	name: 'mke',
	man: 'Мужчина'
}

export type LockPlaylist = Readonly<IPlaylist>

type TUpdateTrackResponse = ReturnType<typeof updateTrack>
type TUpdateTrackParams = Parameters<typeof updateTrack>
