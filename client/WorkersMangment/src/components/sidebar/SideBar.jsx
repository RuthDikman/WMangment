import * as React from "react";
import { Outlet, Link } from "react-router-dom";
import "./SideBar.css";
import { Box } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import TableViewIcon from "@mui/icons-material/TableView";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import WidgetsIcon from "@mui/icons-material/Widgets";
import logo from "../../assets/logo.png";
import Tooltip from "@mui/material/Tooltip";
import SignInOption from "../../store/SignInOption";
export default function SideBar() {
  const authenticated = SignInOption.isLogin === false;
  const DrawerList = (
    <Box sx={{ width: 250, paddingTop: 3 }} role="presentation">
      <h2 style={{ marginLeft: "25%" }}>
        {" "}
        <WidgetsIcon /> WM{" "}
      </h2>
      <Divider sx={{ margin: 5 }} />
      <List>
        {[
          {
            text: "Workers Table",
            icon: <TableViewIcon className="icons" />,
            route: "/",
            title: "show workers table",
          },

          authenticated
            ? {
                text: "Sign in",
                icon: <LoginIcon className="icons" />,
                route: "/sign-in",
                title: "sign-in as manager",
              }
            : {
                text: "Sign out",
                icon: <LogoutIcon className="icons" />,
                route: "/sign-out",
                title: "sign-out",
              },
          authenticated
            ? {
                text: "New Worker",
                icon: <PersonAddIcon className="icons" />,
                disabled: true,
                title: "No access permission",
              }
            : {
                text: "New Worker",
                icon: <PersonAddIcon className="icons" />,
                route: "/new-worker",
                title: "add new worker",
              },
          authenticated
            ? {
                text: "Settings",
                icon: <SettingsSuggestIcon className="icons" />,
                disabled: true,
                title: "No access permission",
              }
            : {
                text: "Settings",
                icon: <SettingsSuggestIcon className="icons" />,
                route: "/settings",
                title: "settings",
              },
        ].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            {item.disabled ? (
              <Tooltip title={item.title} arrow>
                <div style={{ cursor: "not-allowed" }}>
                  <ListItemButton disabled component="div">
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </div>
              </Tooltip>
            ) : (
              <Tooltip title={item.title} arrow>
                <ListItemButton component={Link} to={item.route}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </Tooltip>
            )}
          </ListItem>
        ))}
      </List>
      <Divider sx={{ margin: 5 }} />
      <img src={logo} alt="Logo" className="logo" />
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer variant="permanent" anchor="left">
        {DrawerList}
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
