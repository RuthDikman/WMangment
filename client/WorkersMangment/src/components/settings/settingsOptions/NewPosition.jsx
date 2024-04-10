import * as React from "react";
import { observer } from "mobx-react";
import { useState } from "react";
import PositionsOptions from "../../../store/PositionsOptions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AddHomeIcon from "@mui/icons-material/AddHome";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
const NewPosition = observer(() => {
  const [position, setPosition] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const addNewPosition = () => {
    if (!position.trim()) {
      setError("This field must be filled in");
      return;
    } else {
      PositionsOptions.postPosition(position);
      handleClick();
    }
    setPosition("");
    setError("");
  };

  const clearInput = () => {
    setPosition("");
    setError("");
    window.location.href = "/";
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1vw",
          textAlign: "left",
        }}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <AddHomeIcon
            color="#26a69a"
            style={{ cursor: "pointer" }}
            onClick={addNewPosition}
          />
          <TextField
            id="filled-basic"
            label="New Role"
            variant="filled"
            sx={{ width: "20vw" }}
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            error={Boolean(error)}
            helperText={error}
          />
        </Stack>
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
        >
          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={clearInput}
            style={{
              color: "#26a69a",
              marginRight: "1rem",
              border: "#9e9e9e 1px solid",
            }}
          >
            Cancel
          </Button>
          <Button
            variant="outlined"
            startIcon={<CheckCircleIcon />}
            onClick={addNewPosition}
            style={{ color: "#26a69a", border: "#9e9e9e 1px solid" }}
          >
            Ok
          </Button>
        </Box>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="The role was successfully added."
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      />
    </>
  );
});

export default NewPosition;
