import { Button, TextField } from '@mui/material';
import './App.css'
import Typography from '@mui/material/Typography';
function App() {

  return (
    <div className='container'>
      <Typography variant="h5">Olá, Seja Bem-vindo!</Typography>
      <div className='inputs'>
        <TextField id="outlined-basic" label="Digite seu Nome:" variant="outlined" fullWidth />
        <Button variant="contained" fullWidth>Entrar</Button>
      </div>
    </div>
  )
}

export default App
