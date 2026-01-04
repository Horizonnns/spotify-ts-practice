export type Tid = string
export type TImageUrl = string

// type TDuration = number
// type TIsPublished = boolean
// type YArtist = null | string
// type TAlbom = undefined | string

export type TStatus = 'idle' | 'loading' | 'successed' | 'failed'

type TBase = {
	id: Tid
	createdAt: string
	updatedAt: string
}

export type TArtist = {
	name: string
	image: TImageUrl
	isVerivied: boolean
} & TBase

export interface IBase {
	id: Tid
	createdAt: string
	updatedAt: string
}

export interface IArtist extends IBase {
	name: string
	image: TImageUrl
	isVerivied: boolean
}

export interface ITrack extends IBase {
	artist: IArtist
	title: string
	duration: number
	isPublished: string
}

//  Interface -> используется для описание объекта, сущности (юзера, книги и т.д.), ответы от API
// Type -> используется для описание типов, кот. не являются объектами (примитивы, объединения, пересечения и т.д.)
