import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Products from "./Products";


const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 3,
    padding: "0 4px",
  },
}));

function App() {
  return (
    <div><Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar variant="dense"sx={{display:"flex",justifyContent:"space-between"}}>
        
        <Typography variant="h6" color="inherit" sx={{marginLeft:"50px"}}  component="div">
          My Store
        </Typography>

        <IconButton aria-label="cart"  sx={{marginRight:"50px"}}>
          <StyledBadge badgeContent={4} color="error">
            <ShoppingCartIcon sx={{color:"white"}}/>
          </StyledBadge>
        </IconButton>
      </Toolbar>
    </AppBar>
  </Box>
  <Products />
  </div>
  );
}

export default App;
