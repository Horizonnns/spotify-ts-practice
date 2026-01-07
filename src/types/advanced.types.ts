import type { ITrack } from './music.types'

type TExtrackArraytype<T> = T extends (infer U)[] ? U : never

export type TrackType = TExtrackArraytype<ITrack[]>

type Optional<T> = {
	[K in keyof T]?: T[K]
}

type Nullable<T> = {
	[K in keyof T]: T[K] | null
}

type TTrackDraft = Optional<ITrack>
type TTrackUpdate = Nullable<ITrack>
