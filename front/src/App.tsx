import { Button, TextField } from '@mui/material';
import './App.css'
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './store';
import { registrarNome } from './store/slices/nameSlice';
import { useSnackbar } from './components/snackBar';

function App() {
  const navigate = useNavigate();
  const [ name, setName ] = useState('');
  const dispatch: AppDispatch = useDispatch();
  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    dispatch(registrarNome({
      name: ''
    }));
  }, [dispatch])

  const validate = () => {
    if(name.trim().length === 0) { 
      showSnackbar('Para Avançar é preciso preencher um Nome', 'error')
      return;
    }

    dispatch(registrarNome({
      name
    }));
    setName('');
    navigate('/dashboard', { replace: true })
  }

  return (
    <div className='container'>
      <Typography variant="h5">Olá, Seja Bem-vindo!</Typography>
      <div className='inputs'>
        <TextField id="outlined-basic" label="Digite seu Nome:" variant="outlined" fullWidth onChange={(e) => setName(e.target.value)} value={name} />
        <Button variant="contained" fullWidth onClick={validate}>Entrar</Button>
      </div>
    </div>
  )
}

export default App
