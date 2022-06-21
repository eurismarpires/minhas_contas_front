import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { useEffect, useState } from "react"
import ICategorias from "../../components/interfaces/categorias"
import axios from "axios"

const ListaCategorias = () =>{
    const [categorias, setCategorias] = useState<ICategorias[]>([])

    useEffect(() => {
        axios.get<ICategorias[]>('http://localhost:8080/categorias')
        .then(resposta => setCategorias(resposta.data))
        console.log(categorias)
    },[])

}

export default ListaCategorias