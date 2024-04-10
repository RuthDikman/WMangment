import * as React from "react";
import { observer } from "mobx-react";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import WorkerOptions from "../../store/WorkerOptions";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import EventIcon from "@mui/icons-material/Event";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import Tooltip from "@mui/material/Tooltip";
const PositionDetailsWorker = observer((props) => {
  const { data } = props;
  const [openDialog, setOpenDialog] = useState(false);
  const [worker, setWorker] = useState({
    firstName: "",
    lastName: "",
    tz: "",
    dateOfBirth: new Date(),
    gender: null,
    roles: [],
    dateOfStartingWork: new Date(),
  });

  const handleClickDialog = async () => {
    const getWorker = await WorkerOptions.getWorkerByTz(data);
    console.log("Worker details:", getWorker);
    setWorker(getWorker);
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Tooltip title={"Positions Details"} arrow>
        <ArrowDropDownCircleIcon
          onClick={handleClickDialog}
          style={{
            color: "#616161",
            cursor: "pointer",
            opacity: 1,
            transition: "opacity 0.3s ease",
          }}
        />
      </Tooltip>
      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="Editing an employee"
        maxWidth="md"
        sx={{
          maxheight : "100vh",
          overflowY: "auto",
        }}
      >
        <DialogTitle>
          <CloseIcon
            onClick={handleClose}
            style={{ cursor: "pointer", color: "#26a69a" }}
          />
        </DialogTitle>
        <DialogContent>
          <b>NAME:</b> {`${worker.firstName} ${worker.lastName}`} <b> | </b>{" "}
          <b>Tz:</b> {`${worker.tz}`}
        </DialogContent>
        <DialogContent>
          {worker.roles.map((position, index) => (
            <React.Fragment key={index}>
              {<Divider style={{ margin: "1vw" }} />}
              <Typography variant="h6" color="#26a69a" gutterBottom>
                {position.JobPositionName}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <b>
                  {" "}
                  <AdminPanelSettingsIcon
                    sx={{ fontSize: 15, verticalAlign: "middle" }}
                  />{" "}
                  Administrative:
                </b>{" "}
                {position.IsManagerial ? "Yes" : "None"}
              </Typography>
              <Typography variant="body1">
                <b>
                  <EventIcon sx={{ fontSize: 15, verticalAlign: "middle" }} />{" "}
                  Date of Starting Work:
                </b>{" "}
                {new Date(position.DateStartRole).toLocaleDateString("en-US")}
              </Typography>
            </React.Fragment>
          ))}
        </DialogContent>
      </Dialog>
    </>
  );
});

export default PositionDetailsWorker;
