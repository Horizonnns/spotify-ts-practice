type TID = string
type TImageUrl = string

// type TDuration = number
// type TIsPublished = boolean
// type YArtist = null | string
// type TAlbom = undefined | string

interface IArtist {
	id: TID
	name: string
	image: TImageUrl
	isVerivied: boolean
}

interface ITrack {
	id: TID
	artist: IArtist
}
