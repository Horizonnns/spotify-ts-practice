import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { SpotifyWrapper } from './SpotifyWrapper.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<SpotifyWrapper>
			<App />
		</SpotifyWrapper>
	</StrictMode>
)
