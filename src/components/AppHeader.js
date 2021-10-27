import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material/';


function AppHeader() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Checkout
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default AppHeader;
