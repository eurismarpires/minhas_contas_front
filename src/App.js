import React from "react";
import Menu from "./components/menu";
import Principal from "./components/principal";
import {
  Box,
  Button,
  Typography,
  AppBar,
  Container,
  Toolbar,
  Link,
  Paper,
} from "@mui/material";
import { Link as RouterLink, Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <Typography variant="h6">Minhas Contas</Typography>
            <Box sx={{ display: "flex", flexGrow: 1 }}>
              <Link href="#" >
                <Button sx={{ my: 2, color: "white" }}>Movimentações</Button>
              </Link>
              <Link href="#" >
                <Button sx={{ my: 2, color: "white" }}>Categorias</Button>
              </Link>              
            </Box>          
          </Toolbar>
        </Container>
      </AppBar>
      <Box>
                <Container maxWidth="lg" sx={{ mt: 1 }}>
                    <Paper sx={{ p: 2 }}>
                        <Outlet />
                    </Paper>
                </Container>
            </Box>
    </>
  );
}

export default App;
