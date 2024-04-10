import * as React from "react";
import SignInOption from "../../store/SignInOption";
import { observer } from "mobx-react";
import { useState } from "react";
import WorkerOptions from "../../store/WorkerOptions";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
const Delete = observer((props) => {
  const { data } = props;
  const [openDioalog, setOpenDioalog] = useState(false);

  const handleClickDialog = () => {
    setOpenDioalog(true);
  };

  const handleCloseDialogConfirm = () => {
    WorkerOptions.deleteWorker(data);
    console.log(data);
    setOpenDioalog(false);
  };
  const handleCloseDialogNotConfirm = () => {
    setOpenDioalog(false);
  };
  const handleClick = () => {
    if (SignInOption.isLogin === false) {
    } else {
      handleClickDialog();
    }
  };
  return (
    <>
      <div style={{ color: "#616161" }}>
        <Tooltip
          title={
            SignInOption.isLogin === false
              ? "No access permission"
              : "Delete Worker"
          }
          arrow
        >
          <span>
            <DeleteIcon
              onClick={handleClick}
              style={{
                cursor:
                  SignInOption.isLogin === false ? "not-allowed" : "pointer",
                opacity: SignInOption.isLogin === false ? 0.5 : 1,
                transition: "opacity 0.3s ease",
              }}
            />
          </span>
        </Tooltip>
      </div>
      <Dialog
        open={openDioalog}
        onClose={handleCloseDialogNotConfirm}
        aria-labelledby="Deleting an employee"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Deleting an employee"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Clicking OK constitutes consent to the deletion of this employee
            from the list of active employees.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseDialogNotConfirm}>
            cancel
          </Button>
          <Button onClick={handleCloseDialogConfirm} autoFocus>
            ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
});

export default Delete;
