import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Box } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import BrowseGalleryIcon from "@mui/icons-material/BrowseGallery";
import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import Tooltip from "@mui/material/Tooltip";
import SignInOption from "../../store/SignInOption";

function Header() {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "none",
        color: "#26a69a",
        right: "0",
        direction: "rtl",
        boxShadow: "none",
        width: "30%",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {SignInOption.isLogin !== false && (
                <Tooltip title={"Admin: Active"} arrow>
                  <Avatar
                    sx={{
                      width: 35,
                      height: 35,
                      marginLeft: 1,
                      backgroundColor: "#26a69a",
                      cursor: "pointer",
                    }}
                    alt="Remy Sharp"
                    src="/broken-image.jpg"
                  >
                    <ManageAccountsIcon />
                  </Avatar>
                </Tooltip>
              )}
              <Box ml={1}>{currentTime}</Box>
              <BrowseGalleryIcon />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
