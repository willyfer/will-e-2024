import { DarkMode } from '@mui/icons-material'
import { Button, Switch, useColorScheme } from '@mui/joy'

const ColorSchemeToggle = () => {
  const { mode, setMode } = useColorScheme()

  return (
    // <Button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
    //   {mode === 'light' ? 'oscuro' : 'claro'}
    // </Button>
    <Switch
      style={{ position: 'absolute', right: '20px', top: '20%' }}
      onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
      size='lg'
      slotProps={{
        input: { 'aria-label': 'Dark mode' },
        thumb: {
          children: <DarkMode />
        }
      }}
      sx={{ '--Switch-thumbSize': '16px' }}
    />
  )
}

export default ColorSchemeToggle
