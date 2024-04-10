import * as React from "react";
import SignInOption from "../../store/SignInOption";
import { observer } from "mobx-react";
import { useState } from "react";
import WorkerOptions from "../../store/WorkerOptions";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import EditIcon from "@mui/icons-material/Edit";
import NewWorker from "../newWorker/NewWorker";
import Tooltip from "@mui/material/Tooltip";

const Edit = observer((props) => {
  const { data } = props;
  const [worker, setWorker] = useState();
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialogNotConfirm = () => {
    setOpenDialog(false);
  };

  const handleClick = () => {
    if (SignInOption.isLogin !== null) {
      const getWorker = WorkerOptions.getWorkerByTz(data);
      setWorker(getWorker);
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
              : "Edit Worker"
          }
          arrow
        >
          <span>
            <EditIcon
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
        open={openDialog}
        onClose={handleCloseDialogNotConfirm}
        aria-labelledby="Editing an employee"
        maxWidth="md"
        maxheight ="90vh"
      >
        <DialogContent>
          <NewWorker initialValues={worker} />
        </DialogContent>
      </Dialog>
    </>
  );
});

export default Edit;
