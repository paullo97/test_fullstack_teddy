import { Button, TextField } from '@mui/material';
import './App.css'
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div className='container'>
      <Typography variant="h5">Olá, Seja Bem-vindo!</Typography>
      <div className='inputs'>
        <TextField id="outlined-basic" label="Digite seu Nome:" variant="outlined" fullWidth />
        <Button variant="contained" fullWidth onClick={() => {
          navigate('/dashboard', { replace: true }) // TODO: implements some function to validate if field fill 
        }}>Entrar</Button>
      </div>
    </div>
  )
}

export default App
