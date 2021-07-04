import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useContext } from 'react';
import AppContext from '../contexts/AppContext';

export default function MaterialInput(props) {
    const {theme} = useContext(AppContext)
  return (
    <TextField inputProps={{ className: 'material-input' }} id= {theme === 'light' ? "input_light" : "input_dark"} {...props} variant="outlined" />
    // <TextField inputProps={{ className: 'material-input' }} id= {theme === 'light' ? "input_light" : "input_dark"} label="Outlined" variant="outlined" />
  );
}
