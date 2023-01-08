import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Link from '@mui/material/Link';

const pages = ['Home', 'About', 'Tickets', 'Contact'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar style={{ background: "#000000", boxShadow: "none" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AttachMoneyIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 0 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 900,
              color: 'inherit',
              textDecoration: 'none',
            }}
          > EXCLUSIVE LOTTERY
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link href={"#home"} underline="none">
            <Button
                sx={{ my: 2, color: 'white', display: 'block'  }}
              >
                Home
              </Button>
            </Link>
            <Link href={"#about"} underline="none">
            <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                About
              </Button>
            </Link>
            <Link href={"#Tickets"} underline="none">
            <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Tickets
              </Button>
            </Link>
            <Link href={"#contact"} underline="none">
            <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Contact
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
