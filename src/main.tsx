import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store'
import { CssVarsProvider } from '@mui/joy'
import { theme } from './schema.tsx'
import ColorSchemeToggle from './components/basics/colorSchemeToogle/ColorSchemeToogle.tsx'
declare module '@mui/joy/styles' {
  interface Palette {
    wellow: {
      solidBg: string
      solidHoverBg: string
      solidColor: string
    }
    wBlue: {
      solidBg: string
      solidHoverBg: string
      solidColor: string
    }
  }

  interface PaletteVars {
    wellow: {
      solidBg: string
      solidHoverBg: string
      solidColor: string
    }
    wBlue: {
      solidBg: string
      solidHoverBg: string
      solidColor: string
    }
  }
}
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <CssVarsProvider theme={theme}>
        {/* <ColorSchemeToggle /> */}
        <App />
      </CssVarsProvider>
    </Provider>
  </StrictMode>
)
