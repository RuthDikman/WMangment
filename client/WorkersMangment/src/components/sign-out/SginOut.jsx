import { observer } from "mobx-react";
import { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
const SignOut = observer(() => {
  const [openDioalog, setOpenDioalog] = useState(false);

  const handleClickDialog = () => {
    setOpenDioalog(true);
  };

  const handleCloseDialogConfirm = () => {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("Token");
    setOpenDioalog(false);
    window.location.href = "/";
  };
  const handleCloseDialogNotConfirm = () => {
    setOpenDioalog(false);
    window.location.href = "/";
  };
  useEffect(() => {
    handleClickDialog();
  }, []);

  return (
    <>
      <Dialog
        open={openDioalog}
        onClose={handleCloseDialogNotConfirm}
        aria-labelledby="Are you sure?"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Are you sure?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Clicking OK will close the system privileges.
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
export default SignOut;
