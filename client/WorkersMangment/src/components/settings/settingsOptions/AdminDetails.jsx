import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
export default function BasicCard() {
  return (
    <Card
      sx={{ minWidth: 275, boxShadow: "0px 2px 4px #26a69a", padding: "2" }}
    >
      <CardContent>
        <Avatar
          sx={{
            width: 30,
            height: 30,
            margin: 1,
            backgroundColor: "#02B2AF",
            cursor: "pointer",
          }}
        >
          <ManageAccountsIcon />
        </Avatar>
        <Typography variant="h5" component="div" sx={{ m: 1.3 }}>
          Dan Lang
        </Typography>
        <Typography
          sx={{ mb: 1.5, ml: 1.3, fontSize: 14 }}
          color="text.secondary"
        >
          System Administrator
        </Typography>
        <Typography variant="body10" sx={{ ml: 1.2, fontSize: 12 }}>
          Director of WM | Responsible for workers management
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}
