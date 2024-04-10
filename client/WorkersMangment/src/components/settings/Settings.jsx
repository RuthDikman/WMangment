import * as React from "react";
import "./Settings.css";
import { observer } from "mobx-react";
import NewPosition from "./settingsOptions/NewPosition";
import WorkersForMonth from "./settingsOptions/WorkersForMonth";
import AdminDetails from "./settingsOptions/AdminDetails";
import Alert from "@mui/material/Alert";

const Settings = observer(() => {
  return (
    <div className="bodyComponent">
      <div className="adminDetails">
        <AdminDetails />
      </div>
      <div className="rightComponnents">
        <Alert variant="outlined" severity="success" className="alert">
          Showing the entry of employees by month.
        </Alert>
        <WorkersForMonth />
        <div className="rightComponnents newPosition">
          <Alert variant="outlined" severity="success" className="alert">
            Here you can add a new role:
          </Alert>
          <NewPosition />
        </div>
      </div>
    </div>
  );
});

export default Settings;
