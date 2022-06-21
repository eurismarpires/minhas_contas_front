import axios from "axios";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Link as RouterLink } from 'react-router-dom'
import Menu from "./components/menu";
import Principal  from "./components/principal";






function App() {

  

  const [categorias, setCategorias] = useState([])


  useEffect(() => {
    axios.get('http://localhost:8080/categorias')
      .then(resposta => {
        setCategorias(resposta.data)
        console.log(resposta.data)
      })
      
  }, [])


  return <>
    <div>
    <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Nome
                        </TableCell>
                        <TableCell>
                            Editar
                        </TableCell>
                        <TableCell>
                            Excluir
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {categorias.map(categorias => <TableRow key={categorias.id}>
                        <TableCell>
                            {categorias.nome}
                        </TableCell>
                        <TableCell>
                           [  ]
                        </TableCell>
                        <TableCell>
                           <button variant='outlined' color="error">
                             Excluir
                           </button>
                        </TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>          
    </div>
    

      
      
  
  </>;
}

export default App;
