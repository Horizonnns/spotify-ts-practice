// type THelper = string	-> I prefix для интерфейсов
// interface IEntity {}		-> T prefix для type aliases
// enum EStatus {} 				-> E prefix для enum

import type { IArtist } from './types/music.types'
import type { IPlaylist } from './types/playlist.types'

// Плохо: Один большой интерфейс
interface IBadTrack {
	// 50 полей
}

// Хорошо: композиция
interface ITrackMetaData {
	id: string
	createdAt: Date
	updatedAt: Date
}

interface ITrackContent {
	title: string
	artist: IArtist
	playlist: IPlaylist
}

export interface ITrackR extends ITrackMetaData, ITrackContent {
	audioUrl: string
}
