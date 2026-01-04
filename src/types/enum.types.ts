// Лишний runtime: генерит JS-код даже если нужен только тип → увеличивает банал
// Жёсткий и закрытый: нельзя расширять, нельзя использовать как обычный объект
// Слабая типизация: не даёт union из значений, string-enum теряет плюсы литералов
enum EnunAudioQuality {
	LOW = '96',
	MEDIUM = '160',
	HIGH = '320',
	LOSSLESS = 'FLAC'
}

export const AudioQuality = {
	LOW: '96',
	MEDIUM: '160',
	HIGH: '320',
	LOSSLESS: 'FLAC'
} as const

export type AudioQuality = (typeof AudioQuality)[keyof typeof AudioQuality]

let q: AudioQuality

q = AudioQuality.LOW
q = '320'

console.log(q)
