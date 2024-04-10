import * as React from "react";
import "./SignIn.css";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { makeStyles } from "@material-ui/core/styles";
import { observer } from "mobx-react";
import SignInOption from "../../store/SignInOption";
import Alert from "@mui/material/Alert";
import Swal from "sweetalert2";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "60vh",
    marginLeft: "2vw",
    "@media (max-width: 1300px)": {
      marginLeft: "8vw",
    },
    "@media (max-width: 1100px)": {
      marginLeft: "10vw",
    },
    "@media (max-width: 900px)": {
      marginLeft: "12vw",
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const SignIn = observer(() => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const handleLogin = async () => {
    const response = await SignInOption.managerIdentification(name, password);
    if (response === true) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "successfully,",
        html: "now the permissions are open.",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        window.location.href = "/";
      });
    } else if (response === false) {
      setShowAlert(true);
      setName("");
      setPassword("");
    }
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
    setShowAlert(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setShowAlert(false);
  };
  const classes = useStyles();
  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="responsiveSignIn">
          <Avatar
            className={classes.avatar}
            style={{ backgroundColor: "#26a69a" }}
          >
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box className={classes.form} noValidate>
            <TextField
              onChange={(e) => handleNameChange(e)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="User Name"
              name="name"
              autoFocus
              value={name}
            />
            <TextField
              onChange={(e) => handlePasswordChange(e)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              style={{ backgroundColor: "#26a69a" }}
              onClick={handleLogin}
            >
              Sign In
            </Button>
          </Box>
        </div>
      </Container>
      {showAlert && (
        <div>
          <Alert variant="outlined" severity="error">
            One or more of the data entered is incorrect.{" "}
          </Alert>
          <div style={{ marginTop: "10px", textAlign: "center" }}>
            <a
              href="/"
              style={{ color: "#26a69a", textDecoration: "underline" }}
            >
              Back to the home page
            </a>
          </div>
        </div>
      )}
    </>
  );
});
export default SignIn;
