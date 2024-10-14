import { extendTheme } from '@mui/joy/styles'

// Tema personalizado
export const theme = extendTheme({
  // Definir esquemas de color (light/dark)
  colorSchemes: {
    light: {
      palette: {
        wellow: {
          solidBg: '#FFCC72', // Verde personalizado
          solidHoverBg: '#FEBB45',
          solidColor: '#fff'
        },
        wBlue: {
          solidBg: '#637AB9', // Verde personalizado
          solidHoverBg: '#5468A0',
          solidColor: '#fff'
        }
      }
    },
    dark: {
      palette: {
        wellow: {
          solidBg: '#FFCC72', // Verde personalizado
          solidHoverBg: '#FEBB45',
          solidColor: '#fff'
        },
        wBlue: {
          solidBg: '#637AB9', // Verde personalizado
          solidHoverBg: '#5468A0',
          solidColor: '#fff'
        }
      }
    }
  }
})
