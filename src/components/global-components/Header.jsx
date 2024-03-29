import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

import { stringToColor, stringAvatar } from "./helper";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";

import "../../assets/css/Header.css";

const pages = ["CONNECT", "EVENTS", "PROJECTS"];
const settings = ["Profile", "Logout"];

const ResponsiveAppBar = ({ name }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleConnect = () => {
    navigate("/home");
    setAnchorElNav(null);
  };
  const handleEvents = () => {
    navigate("/event");
    setAnchorElNav(null);
  };
  const handleProjects = () => {
    navigate("/project");
    setAnchorElNav(null);
  };

  const handleCloseNavMenus = [handleConnect, handleEvents, handleProjects];

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    navigate("/user");
    setAnchorElUser(null);
  };

  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to Log Out");
    }
  }

  return (
    <AppBar id="header" position="static">
      <Box sx={{ p: "5px 25px" }}>
        <Toolbar disableGutters>
          {/* Logo at desktop app */}
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              fontWeight: 600,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Logo className="logo" />
            ENNCONNECT
          </Typography>

          {/* Menu at mobile app */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, i) => (
                <MenuItem key={page} onClick={handleCloseNavMenus[i]}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo at mobile app */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              flex: "1",
              justifyContent: { sm: "center" },
              alignItems: "center",
            }}
          >
            <Logo style={{ width: "35px", marginLeft: "10px" }} />
            <Typography
              variant="h4"
              sx={{
                display: { xs: "none", sm: "inline" },
                fontWeight: "600",
                ml: "5px",
              }}
            >
              ENNCONNECT
            </Typography>
          </Box>

          {/* Menu at desktop app */}
          <Box
            id="desktopHeaderMenu"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {pages.map((page, i) => (
              <Button
                key={page}
                onClick={handleCloseNavMenus[i]}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {/* Avatar */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar className="avatar" {...stringAvatar(name)} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Profile</Typography>
              </MenuItem>

              <MenuItem onClick={handleLogout}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
};
export default ResponsiveAppBar;
