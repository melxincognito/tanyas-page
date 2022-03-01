import * as React from "react";
import { Link } from "react-router-dom";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Tabs,
  Tab,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Twitter, LinkedIn, Instagram } from "@mui/icons-material";

const NavigationBar = () => {
  // state variables

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const [value, setValue] = React.useState("one");

  // handle event variables

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // nav styles variables

  const appBarStyles = {
    bgcolor: "primary.main",
    padding: 2,
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.4)",
    color: "secondary.light",
  };

  const tabsContainerStyles = {
    flexGrow: 1,
    alignContent: "center",
    justifyContent: "center",
    display: { xs: "none", md: "flex" },
  };

  const tabsStyles = {
    bgcolor: "rgba(255, 255, 255, 0.35)",
    borderRadius: 1,
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.4)",
  };

  const mobileTabStyle = {
    display: "block",
    width: "100%",
    padding: "18px 20px",
  };

  const socialLinkStyles = {
    p: 0.5,
  };

  // social link external page routes

  function twitterPageClick() {
    window.open("https://www.twitter.com/", "_blank");
  }

  function facebookPageClick() {
    window.open("https://www.facebook.com/TanyaSellsHomesFast", "_blank");
  }
  function instagramPageClick() {
    window.open("https://www.instagram.com/listingsbytanya", "_blank");
  }

  function linkedInPageClick() {
    window.open("https://www.linkedin.com/", "_blank");
  }

  return (
    <AppBar position="static" sx={appBarStyles}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Tanya Gonzalez AZ Realtor
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
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
              <Container
                sx={{
                  width: "20rem",
                  height: "100%",
                  display: "block",
                  float: "left",
                }}
              >
                <MenuItem component={Link} to="/" sx={mobileTabStyle}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>

                <MenuItem
                  component={Link}
                  to="/neighborhoods"
                  sx={mobileTabStyle}
                >
                  <Typography textAlign="center">
                    Phoenix Neighborhoods
                  </Typography>
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/homeCatelog"
                  sx={mobileTabStyle}
                >
                  <Typography textAlign="center">Home Catelog</Typography>
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/homeBuyerTips"
                  sx={mobileTabStyle}
                >
                  <Typography textAlign="center">
                    First Time Home Buyer Tips
                  </Typography>
                </MenuItem>

                <MenuItem component={Link} to="/aboutMe" sx={mobileTabStyle}>
                  <Typography textAlign="center">About Me</Typography>
                </MenuItem>

                <MenuItem component={Link} to="/contact" sx={mobileTabStyle}>
                  <Typography textAlign="center">Contact Me</Typography>
                </MenuItem>
              </Container>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Tanya Gonzalez AZ Realtor
          </Typography>
          <Box sx={tabsContainerStyles}>
            <Tabs
              sx={tabsStyles}
              value={value}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
            >
              <Tab value="one" label="Home" component={Link} to="/" />

              <Tab
                value="two"
                label="Phoenix Neighborhoods"
                component={Link}
                to="/neighborhoods"
              />
              <Tab
                value="three"
                label="Phoenix Home Catelog"
                component={Link}
                to="/homeCatelog"
              />
              <Tab
                value="four"
                label="First time home buyer tips"
                component={Link}
                to="/homeBuyerTips"
              />

              <Tab
                value="five"
                label="About Me"
                component={Link}
                to="/aboutMe"
              />
              <Tab
                value="six"
                label="Contact Me"
                component={Link}
                to="/contact"
              />
            </Tabs>
          </Box>

          <Box display="grid" sx={{ flexGrow: 0 }}>
            <Box display="flex">
              <Twitter
                sx={socialLinkStyles}
                fontSize="large"
                onClick={twitterPageClick}
              />
              <FacebookIcon
                sx={socialLinkStyles}
                fontSize="large"
                onClick={facebookPageClick}
              />
            </Box>
            <Box>
              <Instagram
                sx={socialLinkStyles}
                fontSize="large"
                onClick={instagramPageClick}
              />
              <LinkedIn
                sx={socialLinkStyles}
                fontSize="large"
                onClick={linkedInPageClick}
              />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavigationBar;
