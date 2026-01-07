import type { ComponentProps } from 'react'
import type { IPlayerState } from './player.types'

type Debug<T> = {
	[K in keyof T]: T[K]
}

type TCheckType = Debug<IPlayerState>

type ButtonProps = ComponentProps<'button'>
