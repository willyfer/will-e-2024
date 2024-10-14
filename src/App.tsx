import { Grid } from '@mui/joy'
import { Home } from './pages/home'
import './index.css'
function App () {
  return (
    <Grid columns={{ lg: 24, xl: 24 }} style={{ background: '#1C2334' }}>
      <Home />
    </Grid>
  )
}

export default App
